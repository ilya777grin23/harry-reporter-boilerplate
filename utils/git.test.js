const Utils = require('./git');
const { expect } = require('chai');

describe('git.js', () => {
    it('should return correct format data of git history', async () => {
        // Gen-te test vars
        const page = 4;
        const size = 20;
        // Create var to compare with
        const table = 'hash\tauthor\ttimestamp\tmsg\n'.repeat(size);
        Utils.executeGit = () => {
            return Promise.resolve(table);
        };

        // Tests function
        const mock = await Utils.gitHistory(page, size);
        // Correct result
        const res = (new Array(size)).fill({
            hash: 'hash',
            author: 'author',
            timestamp: 'timestamp',
            msg: 'msg'
        });

        expect(mock).to.deep.eq(res);
    });

    it('should returns correct format data of git tree', async () => {
        const size = 23;
        let mock;

        // Create var to compare with
        const table = 'any type hash\tpath\n'.repeat(size);
        Utils.executeGit = async (params) => {
            mock = params;
            return await table;
        };

        const res = await Utils.gitFileTree('any hash', 'path/to/folder');
        expect(mock).to.deep.eq(
            ['ls-tree', 'any hash', 'path/to/folder'],
            'the params of execute is not correct!'
        );

        expect(res.length).to.deep.eq(size, 'data length is not correct!');
        // Every key and value - equals
        res.forEach(treeData => {
            expect(treeData).to.deep.eq({
                type: 'type',
                hash: 'hash',
                path: 'path'
            }, 'the key or value not correct!');
        });
    });

    it('should parse string, and returns correct data format', () => {
        expect(['a', 'b', 'c']).to.deep.eq(
            // 2arg - becouse without function, [].map - will be throw error
            Utils.parseLog('\na\n\nb\nc\n\n\n', val => val)
        );
    });
});
