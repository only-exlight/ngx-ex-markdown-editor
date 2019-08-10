import { IOption } from '../interfaces/option';

export const EMPHASIS_OPTIONS: IOption[] = [{
    ico: 'B',
    template: '**%**',
    example: 'Bold',
    title: 'Bold text'
}, {
    ico: 'I',
    template: '*%*',
    example: 'Italic',
    title: 'Italic text'
}, {
    ico: 'S',
    template: '~~%~~',
    example: 'Strikethrough',
    title: 'Strikethrough text'
}];
