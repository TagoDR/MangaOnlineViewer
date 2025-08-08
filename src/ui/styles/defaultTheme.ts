import { css } from '../../utils/code-tag.ts';
import colors from '../../utils/colors.ts';

export default css`
  :root,
  .dark {
    --theme-body-background: ${colors.dark['600']};
    --theme-body-text-color: ${colors.dark['50']};
    --theme-text-color: ${colors.dark['50']};
    --theme-primary-color: ${colors.dark['700']};
    --theme-primary-text-color: ${colors.dark['50']};
    --theme-background-color: ${colors.dark['600']};
    --theme-hightlight-color: ${colors.dark['500']};
    --theme-border-color: ${colors.dark['400']};
  }

  .light {
    --theme-body-background: ${colors.gray['50']};
    --theme-body-text-color: ${colors.gray['900']};
    --theme-text-color: ${colors.gray['900']};
    --theme-primary-color: ${colors.gray['300']};
    --theme-primary-text-color: ${colors.gray['900']};
    --theme-background-color: ${colors.gray['50']};
    --theme-hightlight-color: ${colors.gray['500']};
    --theme-border-color: ${colors.gray['100']};
  }
`;
