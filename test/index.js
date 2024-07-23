import fs from 'fs';
import path from 'path';
import { expect } from 'chai';

describe('Копьё Гунгнир', () => {
    const wayFile = path.join('files', 'way.dump');

    it('должно иметь исходное информационное поле', () => {
        expect(fs.existsSync(wayFile)).to.be.true;
    });

    it('должно зорко вглядеться в это поле и увидеть истину в нём', (done) => {
        const content = fs.readFileSync(wayFile, 'utf-8');
        expect(content).to.contain.oneOf([true,]);
        done();
    });

    it('должно отсечь всю тьму, оставив только истину', (done) => {
        const content = fs.readFileSync(wayFile, 'utf-8');
        const trueString = 'true';
        const regExp = new RegExp(trueString);

        const startIndex = content.indexOf(trueString);
        const endIndex = startIndex + trueString.length;
        const onlyTrue = content.slice(startIndex, endIndex);
        expect(onlyTrue).to.match(regExp);
        done();
    });
});