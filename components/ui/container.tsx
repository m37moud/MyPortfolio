import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-[min(1180px,calc(100vw-32px))] md:w-[min(1180px,calc(100vw-48px))]">{children}</div>;
}
