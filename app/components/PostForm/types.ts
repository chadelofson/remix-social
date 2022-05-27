import type { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<"form"> & {
  error: {
    formError?: string[];
    fieldsError?: {
      title: string[];
      body: string[];
    };
  };
  fields: {
    title: string;
    body: string;
  };
};
