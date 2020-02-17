/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'guanbi1' | 'discover' | 'youhuiquan' | 'gou' | 'aixinD' | 'kefu' | 'shezhi' | 'qiandao' | 'dianzan' | 'daishouhuo' | 'daifahuo' | 'daifukuan' | 'dizhi' | 'fenxiang' | 'shouye' | 'fenlei' | 'gouwu' | 'wode' | 'dianhua' | 'fuzhi' | 'saoyisao' | 'xiaoxi' | 'huiyuan' | 'shanchu' | 'guanbi' | 'jianshao' | 'zengjia' | 'yiwancheng';
  size?: number;
  color?: string | string[];
}

export declare const Icon: FunctionComponent<Props>;

export default Icon;
