interface ErrorInterface{
  message: string,
  code: string,
  statusCode: number,
  field?: string
}

export default ErrorInterface;