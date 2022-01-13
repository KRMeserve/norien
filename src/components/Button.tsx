import * as React from "react";
import classnames from "classnames";

type ButtonProps = {
  active: boolean;
  className: string;
  disabled: boolean;
  variant: "primary" | "secondary" | "warning" | "dark" | "light";
};

const defaultProps = {
  active: false,
  disabled: false,
  variant: "primary",
};

export const Button: React.FC<ButtonProps> = ({
  active = defaultProps.active,
  className,
  disabled = defaultProps.disabled,
  variant = defaultProps.variant,
}) => {
  return (
    <button
      className={classnames(
        className,
        active && "active",
        variant && `button-${variant}`,
        disabled && "button-disabled"
      )}
    />
  );
};
