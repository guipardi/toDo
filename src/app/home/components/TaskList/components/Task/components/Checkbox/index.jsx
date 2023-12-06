import { CheckIcon } from '@radix-ui/react-icons';
import { CheckboxRoot, CheckboxIndicator } from './styles'


export const Checkbox = () => (
  <CheckboxRoot defaultChecked>
    <CheckboxIndicator className="CheckboxIndicator">
      <CheckIcon />
    </CheckboxIndicator>
  </CheckboxRoot>
);
