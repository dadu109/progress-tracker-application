import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProgressCheckbox from './ProgressCheckbox';

const onChange = jest.fn();
const TEST_LABEL = 'test';

describe(ProgressCheckbox.name, () => {
  it('renders with correct state', () => {
    const { getByRole } = render(
      <ProgressCheckbox
        label={TEST_LABEL}
        onChange={onChange}
      />,
    );

    const checkbox = getByRole('checkbox');

    expect(checkbox.getAttribute('aria-checked')).toBe('false');
  });

  it('renders with correctly when passed inital state', () => {
    const { getByRole } = render(
      <ProgressCheckbox
        initialChecked
        label={TEST_LABEL}
        onChange={onChange}
      />,
    );

    const checkbox = getByRole('checkbox');

    expect(checkbox.getAttribute('aria-checked')).toBe('true');
  });

  it('changes state when clicked', () => {
    const { getByRole } = render(
      <ProgressCheckbox
        label={TEST_LABEL}
        onChange={onChange}
      />,
    );

    const checkbox = getByRole('checkbox');

    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    fireEvent.click(checkbox);
    expect(checkbox.getAttribute('aria-checked')).toBe('true');
    fireEvent.click(checkbox);
    expect(checkbox.getAttribute('aria-checked')).toBe('false');
  });

  it('changes state when spacebar clicked', () => {
    const { getByRole } = render(
      <ProgressCheckbox
        label={TEST_LABEL}
        onChange={onChange}
      />,
    );

    const checkbox = getByRole('checkbox');

    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    fireEvent.keyDown(checkbox, { code: 'Space', keyCode: 32 });
    expect(checkbox.getAttribute('aria-checked')).toBe('true');
  });

  it('calls onChange function when state changes', () => {
    const { getByRole } = render(
      <ProgressCheckbox
        label={TEST_LABEL}
        onChange={onChange}
      />,
    );

    const checkbox = getByRole('checkbox');

    onChange.mockReset();
    fireEvent.click(checkbox);

    expect(onChange).toBeCalledTimes(1);
  });
});
