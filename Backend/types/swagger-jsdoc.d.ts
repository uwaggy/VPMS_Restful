declare module "swagger-jsdoc" {
  interface SwaggerDefinition {
    openapi: string;
    info: {
      title: string;
      version: string;
      description?: string;
    };
  }

  interface Options {
    definition: SwaggerDefinition;
    apis: string[];
  }

  function swaggerJsdoc(options: Options): object;

  export = swaggerJsdoc;
}
