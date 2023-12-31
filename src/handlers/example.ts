import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

/** How the JSON that the handler returns should be formatted. */
interface IHandlerOutput {
  /** The message to return. In this example, it's always "Hello World!" */
  message: string;
}

/**
 * Validation for this handler function.
 *
 * @param event The AWS Event information for this event
 * @param context The AWS Lambda execution context for this event
 * @returns Relevant info once the handler passes verification.
 */
async function handlerValidation(event: APIGatewayProxyEvent, context: Context) {
  // ...do nothing
}

/**
 * An example Lambda Handler. Simply returns "Hello World!" as json.
 *
 * @param event Info about the API Gateway event that triggered this lambda.
 * @param context Context regarding this lambda call
 * @returns APIGatewayProxyResult
 */
export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  handlerValidation(event, context);

  const response: IHandlerOutput = { message: "Hello World!" };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export default handler;
