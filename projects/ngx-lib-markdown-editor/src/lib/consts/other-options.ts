import { IOption } from '../interfaces/option';

export const CODE_OPTIONS: IOption[] = [{
    example: 'Inline code',
    ico: 'Inline Code',
    template: '`%`',
    title: 'Inline code'
}, {
    example: '// Some code line',
    ico: 'Code',
    template: '    %',
    title: 'Code'
}, {
    example: 'Fences',
    ico: 'Fences',
    template: '```\n%\n```',
    title: 'Fences'
}, {
    example: 'let a = 5',
    ico: 'fal fa-code',
    template: '``` js\n%\n```',
    title: 'Higlight code'
}];

export const LINK_OPTION: IOption = {
    example: 'Link',
    ico: 'fal fa-link',
    template: '[%](http://%)',
    title: 'Insert link'
};

export const IMAGE_OPTION: IOption = {
    example: 'img',
    ico: 'fal fa-image',
    template: '![%](http://% "%")',
    title: 'Insert image'
};

export const SEPARATOR_OPTION: IOption = {
    example: '',
    ico: 'fal fa-horizontal-rule',
    template: '---',
    title: 'Separate line'
};
