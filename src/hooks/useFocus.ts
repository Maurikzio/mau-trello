import { useRef, useEffect } from "react";

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  // we use the useeffect to trigger the focus on the input element.
  // since we are using [] it will be triggered only when the component using 
  // our hook will be mounted
  useEffect(() => {
    ref.current?.focus();
  }, [])

  return ref;
}

/*
  const ref = useRef<HTMLInputElement>(null);
  with (null) assigned the type of ref will be: 
    React.RefObject<HTMLInputElement>
  
  const ref = useRef<HTMLInputElement | null>(null);
  const ref = useRef<HTMLInputElement>();
  with () assigned  the type of ref will be: 
    React.MutableRefObject<HTMLInputElement | undefined>()
*/