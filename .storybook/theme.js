import {create} from '@storybook/theming';
import logo from './public/ml2ui.png'
export default create({
    base:'light',
    brandTitle : 'ML2 UI',
    brandImage: logo,
    brandUrl: 'https://ml2-ui.vercel.app/',
    brandTarget: '_self',
})