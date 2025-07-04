// Simple placeholder implementations for dropdown menu components

export function DropdownMenu({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuContent({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuItem({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function DropdownMenuLabel({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuSeparator() {
  return <hr />;
}

export function DropdownMenuTrigger({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuRadioGroup({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuRadioItem({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
