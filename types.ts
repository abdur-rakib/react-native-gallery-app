// component type
export type COMPONENT_TYPE = {
  children?: React.ReactNode;
};

// share image function param type
export type SHARE_IMAGE_PARAM_TYPE = {
  description: string;
  urls: {regular: string};
};

// error type
export type ERROR_TYPE = any | {message?: string};
