import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
  message: string;
}

export const ErrorMessage: React.FC<Props> = ({ message }) => (
  <Alert variant="danger" className="mt-3">
    {message}
  </Alert>
);
