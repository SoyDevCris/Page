import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>
      Hola mi princesa hermosa la prueba fue exitosa, te ama tu osito{" "}
      {firstName}!
    </h1>
    <p>Email: {email}</p>
    <p>Teléfono: {phone}</p>
    <p>Mensaje: {message}</p>
  </div>
);
