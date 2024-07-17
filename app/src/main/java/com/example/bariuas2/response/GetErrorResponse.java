package com.example.bariuas2.response;

public class GetErrorResponse<T> {
    private String message;
    private T validationErrors;

    public String getMessage() {
        return message;
    }

    public T getValidationErrors() {
        return validationErrors;
    }
}