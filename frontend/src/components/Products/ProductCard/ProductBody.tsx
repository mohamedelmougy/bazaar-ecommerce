import { ChildrenProps } from "../../../types/global";

const ProductBody = ({ children }: ChildrenProps) => {
  return <div className="px-5 pt-5">{children}</div>;
};

export default ProductBody;
