import React from 'react';

export default function ErrorHandling() {
  const forbiddenAccessMessage = "Forbidden Access: You are not authorized to view this page.";

  const errorStyles = {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'red',
  };

  return (
    <div>
      <p style={errorStyles}>{forbiddenAccessMessage}</p>
    </div>
  );
}
