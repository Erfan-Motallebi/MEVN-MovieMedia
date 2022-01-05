import path from "path";

interface IfindImageAddr {
  imageName: string;
}

export const findImageAddr = ({ imageName }: IfindImageAddr): string => {
  const imageAddr = path.join(
    __dirname,
    "../",
    "src",
    "public",
    "images",
    "posts",
    `${imageName}`
  );
  return imageAddr;
};
