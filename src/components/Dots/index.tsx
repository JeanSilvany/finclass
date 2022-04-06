import React, { useMemo } from "react";

import { Container, Dot } from "./styles";
import { Props } from "./types";

export function Dots({ amount }: Props) {
  const listDots = useMemo(() => {
    return Array(amount).fill(0, 0, amount);
  }, [amount]);
  return (
    <Container amount={amount}>
      {listDots.map((_, index) => (
        <Dot key={`${index}-dot`} />
      ))}
    </Container>
  );
}
