interface IProps {
  onClick?: (e: React.MouseEvent) => any;
  children?: React.ReactNode;
  className?: string;
}

export default ({ onClick, children, className = "" }: IProps) => (
  <button
    onClick={onClick}
    className={`mr-2 p-2 bg-blue-500 hover:bg-blue-700 shadow text-white rounded ${className}`}
  >
    {children}
  </button>
);
