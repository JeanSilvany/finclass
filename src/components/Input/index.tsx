import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components";

import openEye from "../../assets/icons/openEye.png";
import closeEye from "../../assets/icons/closeEye.png";

import {
  Container,
  Content,
  Error,
  EyeIcon,
  Label,
  LeftIconContainer,
  RightIconContainer,
  TextInput,
  ToggleEye,
} from "./styles";
import { Props } from "./types";

export function Input({
  error,
  name,
  placeholder,
  secureTextEntry,
  rightIcon,
  leftIcon,
  onBlur,
  onFocus,
  ...rest
}: Props) {
  const { colors } = useTheme();

  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = useMemo(() => {
    if (error) return colors.error.main;
    if (hasFocus) return colors.primary.main;
    return colors.background.main;
  }, [error, hasFocus, colors]);

  return (
    <Container>
      {!!name && (
        <Label type="semiBold" size={12}>
          {name}
        </Label>
      )}
      <Content>
        {!!leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <TextInput
          borderColor={borderColor}
          onFocus={(event) => {
            setHasFocus(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setHasFocus(true);
            onBlur?.(event);
          }}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={colors.placeholder.main}
          selectionColor={colors.placeholder.onMain}
          {...rest}
        />

        {!!rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
        {secureTextEntry && (
          <ToggleEye onPress={() => setShowPassword((oldValue) => !oldValue)}>
            <EyeIcon
              style={{ tintColor: colors.placeholder.main }}
              source={showPassword ? openEye : closeEye}
            />
          </ToggleEye>
        )}
      </Content>
      {!!error && (
        <Error size={10} type="bold">
          {error}
        </Error>
      )}
    </Container>
  );
}
