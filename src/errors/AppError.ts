export class AppError extends Error {
    constructor(
        public statusCode: number,
        message: string,
    ) {
        super(message);
        this.name = 'AppError';
    }
}

export class NotFoundError extends AppError {
    constructor(resource = 'Resource') {
        super(404, `${resource} not found`);
    }
}

export class ConflictError extends AppError {
    constructor(message = 'Conflict') {
        super(409, message);
    }
}

export class BadRequestError extends AppError {
    constructor(message = 'Bad Request') {
        super(400, message);
    }
}
