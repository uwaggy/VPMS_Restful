
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model ParkingSlot
 * 
 */
export type ParkingSlot = $Result.DefaultSelection<Prisma.$ParkingSlotPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model ParkingRecord
 * 
 */
export type ParkingRecord = $Result.DefaultSelection<Prisma.$ParkingRecordPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VerificationStatus: {
  VERIFIED: 'VERIFIED',
  PENDING: 'PENDING',
  UNVERIFIED: 'UNVERIFIED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const PasswordResetStatus: {
  PENDING: 'PENDING',
  IDLE: 'IDLE'
};

export type PasswordResetStatus = (typeof PasswordResetStatus)[keyof typeof PasswordResetStatus]


export const VehicleType: {
  CAR: 'CAR',
  MOTORCYCLE: 'MOTORCYCLE',
  TRUCK: 'TRUCK',
  VAN: 'VAN',
  BUS: 'BUS'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const VehicleSize: {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  XLARGE: 'XLARGE'
};

export type VehicleSize = (typeof VehicleSize)[keyof typeof VehicleSize]


export const ParkingStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  RESERVED: 'RESERVED',
  MAINTENANCE: 'MAINTENANCE'
};

export type ParkingStatus = (typeof ParkingStatus)[keyof typeof ParkingStatus]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const LocationZone: {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST',
  CENTRAL: 'CENTRAL'
};

export type LocationZone = (typeof LocationZone)[keyof typeof LocationZone]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type PasswordResetStatus = $Enums.PasswordResetStatus

export const PasswordResetStatus: typeof $Enums.PasswordResetStatus

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type VehicleSize = $Enums.VehicleSize

export const VehicleSize: typeof $Enums.VehicleSize

export type ParkingStatus = $Enums.ParkingStatus

export const ParkingStatus: typeof $Enums.ParkingStatus

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type LocationZone = $Enums.LocationZone

export const LocationZone: typeof $Enums.LocationZone

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Files
 * const files = await prisma.file.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Files
   * const files = await prisma.file.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSlot`: Exposes CRUD operations for the **ParkingSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSlots
    * const parkingSlots = await prisma.parkingSlot.findMany()
    * ```
    */
  get parkingSlot(): Prisma.ParkingSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingRecord`: Exposes CRUD operations for the **ParkingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingRecords
    * const parkingRecords = await prisma.parkingRecord.findMany()
    * ```
    */
  get parkingRecord(): Prisma.ParkingRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    File: 'File',
    User: 'User',
    Vehicle: 'Vehicle',
    ParkingSlot: 'ParkingSlot',
    Request: 'Request',
    ParkingRecord: 'ParkingRecord',
    Log: 'Log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "file" | "user" | "vehicle" | "parkingSlot" | "request" | "parkingRecord" | "log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      ParkingSlot: {
        payload: Prisma.$ParkingSlotPayload<ExtArgs>
        fields: Prisma.ParkingSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findMany: {
            args: Prisma.ParkingSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          create: {
            args: Prisma.ParkingSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          createMany: {
            args: Prisma.ParkingSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          delete: {
            args: Prisma.ParkingSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          update: {
            args: Prisma.ParkingSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSlot>
          }
          groupBy: {
            args: Prisma.ParkingSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSlotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      ParkingRecord: {
        payload: Prisma.$ParkingRecordPayload<ExtArgs>
        fields: Prisma.ParkingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          findFirst: {
            args: Prisma.ParkingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          findMany: {
            args: Prisma.ParkingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          create: {
            args: Prisma.ParkingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          createMany: {
            args: Prisma.ParkingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          delete: {
            args: Prisma.ParkingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          update: {
            args: Prisma.ParkingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          deleteMany: {
            args: Prisma.ParkingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          upsert: {
            args: Prisma.ParkingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          aggregate: {
            args: Prisma.ParkingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingRecord>
          }
          groupBy: {
            args: Prisma.ParkingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingRecordCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    file?: FileOmit
    user?: UserOmit
    vehicle?: VehicleOmit
    parkingSlot?: ParkingSlotOmit
    request?: RequestOmit
    parkingRecord?: ParkingRecordOmit
    log?: LogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    requests: number
    requestsApproved: number
    logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    requestsApproved?: boolean | UserCountOutputTypeCountRequestsApprovedArgs
    logs?: boolean | UserCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsApprovedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    requests: number
    parkingRecords: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | VehicleCountOutputTypeCountRequestsArgs
    parkingRecords?: boolean | VehicleCountOutputTypeCountParkingRecordsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountParkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }


  /**
   * Count Type ParkingSlotCountOutputType
   */

  export type ParkingSlotCountOutputType = {
    requests: number
    parkingRecords: number
    parkingSpotRecords: number
  }

  export type ParkingSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | ParkingSlotCountOutputTypeCountRequestsArgs
    parkingRecords?: boolean | ParkingSlotCountOutputTypeCountParkingRecordsArgs
    parkingSpotRecords?: boolean | ParkingSlotCountOutputTypeCountParkingSpotRecordsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotCountOutputType
     */
    select?: ParkingSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountParkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountParkingSpotRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    url: string | null
    mimeType: string | null
    size: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    url: string | null
    mimeType: string | null
    size: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    name: number
    originalName: number
    url: number
    mimeType: number
    size: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    size?: true
  }

  export type FileSumAggregateInputType = {
    size?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    url?: true
    mimeType?: true
    size?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    url?: true
    mimeType?: true
    size?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    url?: true
    mimeType?: true
    size?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    name: string
    originalName: string
    url: string
    mimeType: string
    size: number
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | File$userArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | File$userArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | File$userArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    name?: boolean
    originalName?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "originalName" | "url" | "mimeType" | "size" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | File$userArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | File$userArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | File$userArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      originalName: string
      url: string
      mimeType: string
      size: number
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends File$userArgs<ExtArgs> = {}>(args?: Subset<T, File$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly name: FieldRef<"File", 'String'>
    readonly originalName: FieldRef<"File", 'String'>
    readonly url: FieldRef<"File", 'String'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'Int'>
    readonly userId: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.user
   */
  export type File$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    profilePictureId: string | null
    verificationStatus: $Enums.VerificationStatus | null
    verificationToken: string | null
    verificationExpires: Date | null
    resetToken: string | null
    resetExpires: Date | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    profilePictureId: string | null
    verificationStatus: $Enums.VerificationStatus | null
    verificationToken: string | null
    verificationExpires: Date | null
    resetToken: string | null
    resetExpires: Date | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    phone: number
    role: number
    profilePictureId: number
    verificationStatus: number
    verificationToken: number
    verificationExpires: number
    resetToken: number
    resetExpires: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    profilePictureId?: true
    verificationStatus?: true
    verificationToken?: true
    verificationExpires?: true
    resetToken?: true
    resetExpires?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    profilePictureId?: true
    verificationStatus?: true
    verificationToken?: true
    verificationExpires?: true
    resetToken?: true
    resetExpires?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    profilePictureId?: true
    verificationStatus?: true
    verificationToken?: true
    verificationExpires?: true
    resetToken?: true
    resetExpires?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    phone: string | null
    role: $Enums.Role
    profilePictureId: string | null
    verificationStatus: $Enums.VerificationStatus
    verificationToken: string | null
    verificationExpires: Date | null
    resetToken: string | null
    resetExpires: Date | null
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePictureId?: boolean
    verificationStatus?: boolean
    verificationToken?: boolean
    verificationExpires?: boolean
    resetToken?: boolean
    resetExpires?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilePicture?: boolean | User$profilePictureArgs<ExtArgs>
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    requestsApproved?: boolean | User$requestsApprovedArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePictureId?: boolean
    verificationStatus?: boolean
    verificationToken?: boolean
    verificationExpires?: boolean
    resetToken?: boolean
    resetExpires?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePictureId?: boolean
    verificationStatus?: boolean
    verificationToken?: boolean
    verificationExpires?: boolean
    resetToken?: boolean
    resetExpires?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePictureId?: boolean
    verificationStatus?: boolean
    verificationToken?: boolean
    verificationExpires?: boolean
    resetToken?: boolean
    resetExpires?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "phone" | "role" | "profilePictureId" | "verificationStatus" | "verificationToken" | "verificationExpires" | "resetToken" | "resetExpires" | "isActive" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profilePicture?: boolean | User$profilePictureArgs<ExtArgs>
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    requestsApproved?: boolean | User$requestsApprovedArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profilePicture: Prisma.$FilePayload<ExtArgs> | null
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
      requestsApproved: Prisma.$RequestPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      profilePictureId: string | null
      verificationStatus: $Enums.VerificationStatus
      verificationToken: string | null
      verificationExpires: Date | null
      resetToken: string | null
      resetExpires: Date | null
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profilePicture<T extends User$profilePictureArgs<ExtArgs> = {}>(args?: Subset<T, User$profilePictureArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requestsApproved<T extends User$requestsApprovedArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsApprovedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profilePictureId: FieldRef<"User", 'String'>
    readonly verificationStatus: FieldRef<"User", 'VerificationStatus'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationExpires: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetExpires: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profilePicture
   */
  export type User$profilePictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.requestsApproved
   */
  export type User$requestsApprovedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    type: $Enums.VehicleType | null
    brand: string | null
    size: $Enums.VehicleSize | null
    made: string | null
    model: string | null
    color: string | null
    year: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    type: $Enums.VehicleType | null
    brand: string | null
    size: $Enums.VehicleSize | null
    made: string | null
    model: string | null
    color: string | null
    year: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    plateNumber: number
    type: number
    brand: number
    size: number
    made: number
    model: number
    color: number
    year: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    plateNumber?: true
    type?: true
    brand?: true
    size?: true
    made?: true
    model?: true
    color?: true
    year?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    plateNumber?: true
    type?: true
    brand?: true
    size?: true
    made?: true
    model?: true
    color?: true
    year?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    plateNumber?: true
    type?: true
    brand?: true
    size?: true
    made?: true
    model?: true
    color?: true
    year?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    plateNumber: string
    type: $Enums.VehicleType
    brand: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year: number | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    type?: boolean
    brand?: boolean
    size?: boolean
    made?: boolean
    model?: boolean
    color?: boolean
    year?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Vehicle$requestsArgs<ExtArgs>
    parkingRecords?: boolean | Vehicle$parkingRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    type?: boolean
    brand?: boolean
    size?: boolean
    made?: boolean
    model?: boolean
    color?: boolean
    year?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    type?: boolean
    brand?: boolean
    size?: boolean
    made?: boolean
    model?: boolean
    color?: boolean
    year?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    plateNumber?: boolean
    type?: boolean
    brand?: boolean
    size?: boolean
    made?: boolean
    model?: boolean
    color?: boolean
    year?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plateNumber" | "type" | "brand" | "size" | "made" | "model" | "color" | "year" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Vehicle$requestsArgs<ExtArgs>
    parkingRecords?: boolean | Vehicle$parkingRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      requests: Prisma.$RequestPayload<ExtArgs>[]
      parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plateNumber: string
      type: $Enums.VehicleType
      brand: string | null
      size: $Enums.VehicleSize
      made: string
      model: string
      color: string
      year: number | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends Vehicle$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingRecords<T extends Vehicle$parkingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly plateNumber: FieldRef<"Vehicle", 'String'>
    readonly type: FieldRef<"Vehicle", 'VehicleType'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly size: FieldRef<"Vehicle", 'VehicleSize'>
    readonly made: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly ownerId: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.requests
   */
  export type Vehicle$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Vehicle.parkingRecords
   */
  export type Vehicle$parkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSlot
   */

  export type AggregateParkingSlot = {
    _count: ParkingSlotCountAggregateOutputType | null
    _avg: ParkingSlotAvgAggregateOutputType | null
    _sum: ParkingSlotSumAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  export type ParkingSlotAvgAggregateOutputType = {
    floor: number | null
    hourlyRate: number | null
  }

  export type ParkingSlotSumAggregateOutputType = {
    floor: number | null
    hourlyRate: number | null
  }

  export type ParkingSlotMinAggregateOutputType = {
    id: string | null
    code: string | null
    zone: $Enums.LocationZone | null
    floor: number | null
    type: $Enums.VehicleType | null
    size: $Enums.VehicleSize | null
    status: $Enums.ParkingStatus | null
    hourlyRate: number | null
    isCovered: boolean | null
    hasCharger: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotMaxAggregateOutputType = {
    id: string | null
    code: string | null
    zone: $Enums.LocationZone | null
    floor: number | null
    type: $Enums.VehicleType | null
    size: $Enums.VehicleSize | null
    status: $Enums.ParkingStatus | null
    hourlyRate: number | null
    isCovered: boolean | null
    hasCharger: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotCountAggregateOutputType = {
    id: number
    code: number
    zone: number
    floor: number
    type: number
    size: number
    status: number
    hourlyRate: number
    isCovered: number
    hasCharger: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingSlotAvgAggregateInputType = {
    floor?: true
    hourlyRate?: true
  }

  export type ParkingSlotSumAggregateInputType = {
    floor?: true
    hourlyRate?: true
  }

  export type ParkingSlotMinAggregateInputType = {
    id?: true
    code?: true
    zone?: true
    floor?: true
    type?: true
    size?: true
    status?: true
    hourlyRate?: true
    isCovered?: true
    hasCharger?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotMaxAggregateInputType = {
    id?: true
    code?: true
    zone?: true
    floor?: true
    type?: true
    size?: true
    status?: true
    hourlyRate?: true
    isCovered?: true
    hasCharger?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotCountAggregateInputType = {
    id?: true
    code?: true
    zone?: true
    floor?: true
    type?: true
    size?: true
    status?: true
    hourlyRate?: true
    isCovered?: true
    hasCharger?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlot to aggregate.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSlots
    **/
    _count?: true | ParkingSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type GetParkingSlotAggregateType<T extends ParkingSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSlot[P]>
      : GetScalarType<T[P], AggregateParkingSlot[P]>
  }




  export type ParkingSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithAggregationInput | ParkingSlotOrderByWithAggregationInput[]
    by: ParkingSlotScalarFieldEnum[] | ParkingSlotScalarFieldEnum
    having?: ParkingSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSlotCountAggregateInputType | true
    _avg?: ParkingSlotAvgAggregateInputType
    _sum?: ParkingSlotSumAggregateInputType
    _min?: ParkingSlotMinAggregateInputType
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type ParkingSlotGroupByOutputType = {
    id: string
    code: string
    zone: $Enums.LocationZone
    floor: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status: $Enums.ParkingStatus
    hourlyRate: number
    isCovered: boolean
    hasCharger: boolean
    createdAt: Date
    updatedAt: Date
    _count: ParkingSlotCountAggregateOutputType | null
    _avg: ParkingSlotAvgAggregateOutputType | null
    _sum: ParkingSlotSumAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  type GetParkingSlotGroupByPayload<T extends ParkingSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    zone?: boolean
    floor?: boolean
    type?: boolean
    size?: boolean
    status?: boolean
    hourlyRate?: boolean
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requests?: boolean | ParkingSlot$requestsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingSlot$parkingRecordsArgs<ExtArgs>
    parkingSpotRecords?: boolean | ParkingSlot$parkingSpotRecordsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    zone?: boolean
    floor?: boolean
    type?: boolean
    size?: boolean
    status?: boolean
    hourlyRate?: boolean
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    zone?: boolean
    floor?: boolean
    type?: boolean
    size?: boolean
    status?: boolean
    hourlyRate?: boolean
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectScalar = {
    id?: boolean
    code?: boolean
    zone?: boolean
    floor?: boolean
    type?: boolean
    size?: boolean
    status?: boolean
    hourlyRate?: boolean
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "zone" | "floor" | "type" | "size" | "status" | "hourlyRate" | "isCovered" | "hasCharger" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingSlot"]>
  export type ParkingSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | ParkingSlot$requestsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingSlot$parkingRecordsArgs<ExtArgs>
    parkingSpotRecords?: boolean | ParkingSlot$parkingSpotRecordsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkingSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkingSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSlot"
    objects: {
      requests: Prisma.$RequestPayload<ExtArgs>[]
      parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
      parkingSpotRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      zone: $Enums.LocationZone
      floor: number
      type: $Enums.VehicleType
      size: $Enums.VehicleSize
      status: $Enums.ParkingStatus
      hourlyRate: number
      isCovered: boolean
      hasCharger: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingSlot"]>
    composites: {}
  }

  type ParkingSlotGetPayload<S extends boolean | null | undefined | ParkingSlotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSlotPayload, S>

  type ParkingSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSlotCountAggregateInputType | true
    }

  export interface ParkingSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSlot'], meta: { name: 'ParkingSlot' } }
    /**
     * Find zero or one ParkingSlot that matches the filter.
     * @param {ParkingSlotFindUniqueArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSlotFindUniqueArgs>(args: SelectSubset<T, ParkingSlotFindUniqueArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSlotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSlotFindFirstArgs>(args?: SelectSubset<T, ParkingSlotFindFirstArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany()
     * 
     * // Get first 10 ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSlotFindManyArgs>(args?: SelectSubset<T, ParkingSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSlot.
     * @param {ParkingSlotCreateArgs} args - Arguments to create a ParkingSlot.
     * @example
     * // Create one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.create({
     *   data: {
     *     // ... data to create a ParkingSlot
     *   }
     * })
     * 
     */
    create<T extends ParkingSlotCreateArgs>(args: SelectSubset<T, ParkingSlotCreateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSlots.
     * @param {ParkingSlotCreateManyArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSlotCreateManyArgs>(args?: SelectSubset<T, ParkingSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSlots and returns the data saved in the database.
     * @param {ParkingSlotCreateManyAndReturnArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSlot.
     * @param {ParkingSlotDeleteArgs} args - Arguments to delete one ParkingSlot.
     * @example
     * // Delete one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSlot
     *   }
     * })
     * 
     */
    delete<T extends ParkingSlotDeleteArgs>(args: SelectSubset<T, ParkingSlotDeleteArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSlot.
     * @param {ParkingSlotUpdateArgs} args - Arguments to update one ParkingSlot.
     * @example
     * // Update one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSlotUpdateArgs>(args: SelectSubset<T, ParkingSlotUpdateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSlots.
     * @param {ParkingSlotDeleteManyArgs} args - Arguments to filter ParkingSlots to delete.
     * @example
     * // Delete a few ParkingSlots
     * const { count } = await prisma.parkingSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSlotDeleteManyArgs>(args?: SelectSubset<T, ParkingSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSlotUpdateManyArgs>(args: SelectSubset<T, ParkingSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots and returns the data updated in the database.
     * @param {ParkingSlotUpdateManyAndReturnArgs} args - Arguments to update many ParkingSlots.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSlot.
     * @param {ParkingSlotUpsertArgs} args - Arguments to update or create a ParkingSlot.
     * @example
     * // Update or create a ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.upsert({
     *   create: {
     *     // ... data to create a ParkingSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSlot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSlotUpsertArgs>(args: SelectSubset<T, ParkingSlotUpsertArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotCountArgs} args - Arguments to filter ParkingSlots to count.
     * @example
     * // Count the number of ParkingSlots
     * const count = await prisma.parkingSlot.count({
     *   where: {
     *     // ... the filter for the ParkingSlots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSlotCountArgs>(
      args?: Subset<T, ParkingSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingSlotAggregateArgs>(args: Subset<T, ParkingSlotAggregateArgs>): Prisma.PrismaPromise<GetParkingSlotAggregateType<T>>

    /**
     * Group by ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSlotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSlot model
   */
  readonly fields: ParkingSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends ParkingSlot$requestsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingRecords<T extends ParkingSlot$parkingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingSpotRecords<T extends ParkingSlot$parkingSpotRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$parkingSpotRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingSlot model
   */
  interface ParkingSlotFieldRefs {
    readonly id: FieldRef<"ParkingSlot", 'String'>
    readonly code: FieldRef<"ParkingSlot", 'String'>
    readonly zone: FieldRef<"ParkingSlot", 'LocationZone'>
    readonly floor: FieldRef<"ParkingSlot", 'Int'>
    readonly type: FieldRef<"ParkingSlot", 'VehicleType'>
    readonly size: FieldRef<"ParkingSlot", 'VehicleSize'>
    readonly status: FieldRef<"ParkingSlot", 'ParkingStatus'>
    readonly hourlyRate: FieldRef<"ParkingSlot", 'Float'>
    readonly isCovered: FieldRef<"ParkingSlot", 'Boolean'>
    readonly hasCharger: FieldRef<"ParkingSlot", 'Boolean'>
    readonly createdAt: FieldRef<"ParkingSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSlot findUnique
   */
  export type ParkingSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findUniqueOrThrow
   */
  export type ParkingSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findFirst
   */
  export type ParkingSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findFirstOrThrow
   */
  export type ParkingSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findMany
   */
  export type ParkingSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlots to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot create
   */
  export type ParkingSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSlot.
     */
    data: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
  }

  /**
   * ParkingSlot createMany
   */
  export type ParkingSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlot createManyAndReturn
   */
  export type ParkingSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlot update
   */
  export type ParkingSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSlot.
     */
    data: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSlot to update.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot updateMany
   */
  export type ParkingSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
  }

  /**
   * ParkingSlot updateManyAndReturn
   */
  export type ParkingSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
  }

  /**
   * ParkingSlot upsert
   */
  export type ParkingSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSlot to update in case it exists.
     */
    where: ParkingSlotWhereUniqueInput
    /**
     * In case the ParkingSlot found by the `where` argument doesn't exist, create a new ParkingSlot with this data.
     */
    create: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
    /**
     * In case the ParkingSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
  }

  /**
   * ParkingSlot delete
   */
  export type ParkingSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSlot to delete.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot deleteMany
   */
  export type ParkingSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlots to delete
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to delete.
     */
    limit?: number
  }

  /**
   * ParkingSlot.requests
   */
  export type ParkingSlot$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * ParkingSlot.parkingRecords
   */
  export type ParkingSlot$parkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingSlot.parkingSpotRecords
   */
  export type ParkingSlot$parkingSpotRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingSlot without action
   */
  export type ParkingSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    durationHours: number | null
  }

  export type RequestSumAggregateOutputType = {
    durationHours: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    vehicleId: string | null
    slotId: string | null
    status: $Enums.RequestStatus | null
    startTime: Date | null
    endTime: Date | null
    durationHours: number | null
    approvedById: string | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    vehicleId: string | null
    slotId: string | null
    status: $Enums.RequestStatus | null
    startTime: Date | null
    endTime: Date | null
    durationHours: number | null
    approvedById: string | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    userId: number
    vehicleId: number
    slotId: number
    status: number
    startTime: number
    endTime: number
    durationHours: number
    approvedById: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    durationHours?: true
  }

  export type RequestSumAggregateInputType = {
    durationHours?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    slotId?: true
    status?: true
    startTime?: true
    endTime?: true
    durationHours?: true
    approvedById?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    slotId?: true
    status?: true
    startTime?: true
    endTime?: true
    durationHours?: true
    approvedById?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    slotId?: true
    status?: true
    startTime?: true
    endTime?: true
    durationHours?: true
    approvedById?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    userId: string
    vehicleId: string
    slotId: string | null
    status: $Enums.RequestStatus
    startTime: Date
    endTime: Date
    durationHours: number
    approvedById: string | null
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    durationHours?: boolean
    approvedById?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | Request$slotArgs<ExtArgs>
    approvedBy?: boolean | Request$approvedByArgs<ExtArgs>
    parkingRecord?: boolean | Request$parkingRecordArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    durationHours?: boolean
    approvedById?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | Request$slotArgs<ExtArgs>
    approvedBy?: boolean | Request$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    durationHours?: boolean
    approvedById?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | Request$slotArgs<ExtArgs>
    approvedBy?: boolean | Request$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    durationHours?: boolean
    approvedById?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vehicleId" | "slotId" | "status" | "startTime" | "endTime" | "durationHours" | "approvedById" | "rejectionReason" | "createdAt" | "updatedAt", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | Request$slotArgs<ExtArgs>
    approvedBy?: boolean | Request$approvedByArgs<ExtArgs>
    parkingRecord?: boolean | Request$parkingRecordArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | Request$slotArgs<ExtArgs>
    approvedBy?: boolean | Request$approvedByArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | Request$slotArgs<ExtArgs>
    approvedBy?: boolean | Request$approvedByArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      slot: Prisma.$ParkingSlotPayload<ExtArgs> | null
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
      parkingRecord: Prisma.$ParkingRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      vehicleId: string
      slotId: string | null
      status: $Enums.RequestStatus
      startTime: Date
      endTime: Date
      durationHours: number
      approvedById: string | null
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slot<T extends Request$slotArgs<ExtArgs> = {}>(args?: Subset<T, Request$slotArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends Request$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, Request$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parkingRecord<T extends Request$parkingRecordArgs<ExtArgs> = {}>(args?: Subset<T, Request$parkingRecordArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly userId: FieldRef<"Request", 'String'>
    readonly vehicleId: FieldRef<"Request", 'String'>
    readonly slotId: FieldRef<"Request", 'String'>
    readonly status: FieldRef<"Request", 'RequestStatus'>
    readonly startTime: FieldRef<"Request", 'DateTime'>
    readonly endTime: FieldRef<"Request", 'DateTime'>
    readonly durationHours: FieldRef<"Request", 'Float'>
    readonly approvedById: FieldRef<"Request", 'String'>
    readonly rejectionReason: FieldRef<"Request", 'String'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly updatedAt: FieldRef<"Request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.slot
   */
  export type Request$slotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    where?: ParkingSlotWhereInput
  }

  /**
   * Request.approvedBy
   */
  export type Request$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Request.parkingRecord
   */
  export type Request$parkingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model ParkingRecord
   */

  export type AggregateParkingRecord = {
    _count: ParkingRecordCountAggregateOutputType | null
    _avg: ParkingRecordAvgAggregateOutputType | null
    _sum: ParkingRecordSumAggregateOutputType | null
    _min: ParkingRecordMinAggregateOutputType | null
    _max: ParkingRecordMaxAggregateOutputType | null
  }

  export type ParkingRecordAvgAggregateOutputType = {
    totalHours: number | null
    amountPaid: number | null
  }

  export type ParkingRecordSumAggregateOutputType = {
    totalHours: number | null
    amountPaid: number | null
  }

  export type ParkingRecordMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    vehicleId: string | null
    slotId: string | null
    checkIn: Date | null
    parkingSpotIdPrisma: string | null
    checkOut: Date | null
    totalHours: number | null
    amountPaid: number | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingRecordMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    vehicleId: string | null
    slotId: string | null
    checkIn: Date | null
    parkingSpotIdPrisma: string | null
    checkOut: Date | null
    totalHours: number | null
    amountPaid: number | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingRecordCountAggregateOutputType = {
    id: number
    requestId: number
    vehicleId: number
    slotId: number
    checkIn: number
    parkingSpotIdPrisma: number
    checkOut: number
    totalHours: number
    amountPaid: number
    paymentMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingRecordAvgAggregateInputType = {
    totalHours?: true
    amountPaid?: true
  }

  export type ParkingRecordSumAggregateInputType = {
    totalHours?: true
    amountPaid?: true
  }

  export type ParkingRecordMinAggregateInputType = {
    id?: true
    requestId?: true
    vehicleId?: true
    slotId?: true
    checkIn?: true
    parkingSpotIdPrisma?: true
    checkOut?: true
    totalHours?: true
    amountPaid?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingRecordMaxAggregateInputType = {
    id?: true
    requestId?: true
    vehicleId?: true
    slotId?: true
    checkIn?: true
    parkingSpotIdPrisma?: true
    checkOut?: true
    totalHours?: true
    amountPaid?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingRecordCountAggregateInputType = {
    id?: true
    requestId?: true
    vehicleId?: true
    slotId?: true
    checkIn?: true
    parkingSpotIdPrisma?: true
    checkOut?: true
    totalHours?: true
    amountPaid?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingRecord to aggregate.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingRecords
    **/
    _count?: true | ParkingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingRecordMaxAggregateInputType
  }

  export type GetParkingRecordAggregateType<T extends ParkingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingRecord[P]>
      : GetScalarType<T[P], AggregateParkingRecord[P]>
  }




  export type ParkingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithAggregationInput | ParkingRecordOrderByWithAggregationInput[]
    by: ParkingRecordScalarFieldEnum[] | ParkingRecordScalarFieldEnum
    having?: ParkingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingRecordCountAggregateInputType | true
    _avg?: ParkingRecordAvgAggregateInputType
    _sum?: ParkingRecordSumAggregateInputType
    _min?: ParkingRecordMinAggregateInputType
    _max?: ParkingRecordMaxAggregateInputType
  }

  export type ParkingRecordGroupByOutputType = {
    id: string
    requestId: string | null
    vehicleId: string
    slotId: string
    checkIn: Date
    parkingSpotIdPrisma: string | null
    checkOut: Date | null
    totalHours: number | null
    amountPaid: number | null
    paymentMethod: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParkingRecordCountAggregateOutputType | null
    _avg: ParkingRecordAvgAggregateOutputType | null
    _sum: ParkingRecordSumAggregateOutputType | null
    _min: ParkingRecordMinAggregateOutputType | null
    _max: ParkingRecordMaxAggregateOutputType | null
  }

  type GetParkingRecordGroupByPayload<T extends ParkingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingRecordGroupByOutputType[P]>
        }
      >
    >


  export type ParkingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    checkIn?: boolean
    parkingSpotIdPrisma?: boolean
    checkOut?: boolean
    totalHours?: boolean
    amountPaid?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | ParkingRecord$requestArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    checkIn?: boolean
    parkingSpotIdPrisma?: boolean
    checkOut?: boolean
    totalHours?: boolean
    amountPaid?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | ParkingRecord$requestArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    checkIn?: boolean
    parkingSpotIdPrisma?: boolean
    checkOut?: boolean
    totalHours?: boolean
    amountPaid?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | ParkingRecord$requestArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectScalar = {
    id?: boolean
    requestId?: boolean
    vehicleId?: boolean
    slotId?: boolean
    checkIn?: boolean
    parkingSpotIdPrisma?: boolean
    checkOut?: boolean
    totalHours?: boolean
    amountPaid?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "vehicleId" | "slotId" | "checkIn" | "parkingSpotIdPrisma" | "checkOut" | "totalHours" | "amountPaid" | "paymentMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingRecord"]>
  export type ParkingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ParkingRecord$requestArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
  }
  export type ParkingRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ParkingRecord$requestArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
  }
  export type ParkingRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ParkingRecord$requestArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
  }

  export type $ParkingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingRecord"
    objects: {
      request: Prisma.$RequestPayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      slot: Prisma.$ParkingSlotPayload<ExtArgs>
      parkingSpot: Prisma.$ParkingSlotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string | null
      vehicleId: string
      slotId: string
      checkIn: Date
      parkingSpotIdPrisma: string | null
      checkOut: Date | null
      totalHours: number | null
      amountPaid: number | null
      paymentMethod: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingRecord"]>
    composites: {}
  }

  type ParkingRecordGetPayload<S extends boolean | null | undefined | ParkingRecordDefaultArgs> = $Result.GetResult<Prisma.$ParkingRecordPayload, S>

  type ParkingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingRecordCountAggregateInputType | true
    }

  export interface ParkingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingRecord'], meta: { name: 'ParkingRecord' } }
    /**
     * Find zero or one ParkingRecord that matches the filter.
     * @param {ParkingRecordFindUniqueArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingRecordFindUniqueArgs>(args: SelectSubset<T, ParkingRecordFindUniqueArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingRecordFindUniqueOrThrowArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindFirstArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingRecordFindFirstArgs>(args?: SelectSubset<T, ParkingRecordFindFirstArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindFirstOrThrowArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingRecords
     * const parkingRecords = await prisma.parkingRecord.findMany()
     * 
     * // Get first 10 ParkingRecords
     * const parkingRecords = await prisma.parkingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingRecordFindManyArgs>(args?: SelectSubset<T, ParkingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingRecord.
     * @param {ParkingRecordCreateArgs} args - Arguments to create a ParkingRecord.
     * @example
     * // Create one ParkingRecord
     * const ParkingRecord = await prisma.parkingRecord.create({
     *   data: {
     *     // ... data to create a ParkingRecord
     *   }
     * })
     * 
     */
    create<T extends ParkingRecordCreateArgs>(args: SelectSubset<T, ParkingRecordCreateArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingRecords.
     * @param {ParkingRecordCreateManyArgs} args - Arguments to create many ParkingRecords.
     * @example
     * // Create many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingRecordCreateManyArgs>(args?: SelectSubset<T, ParkingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingRecords and returns the data saved in the database.
     * @param {ParkingRecordCreateManyAndReturnArgs} args - Arguments to create many ParkingRecords.
     * @example
     * // Create many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingRecords and only return the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingRecord.
     * @param {ParkingRecordDeleteArgs} args - Arguments to delete one ParkingRecord.
     * @example
     * // Delete one ParkingRecord
     * const ParkingRecord = await prisma.parkingRecord.delete({
     *   where: {
     *     // ... filter to delete one ParkingRecord
     *   }
     * })
     * 
     */
    delete<T extends ParkingRecordDeleteArgs>(args: SelectSubset<T, ParkingRecordDeleteArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingRecord.
     * @param {ParkingRecordUpdateArgs} args - Arguments to update one ParkingRecord.
     * @example
     * // Update one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingRecordUpdateArgs>(args: SelectSubset<T, ParkingRecordUpdateArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingRecords.
     * @param {ParkingRecordDeleteManyArgs} args - Arguments to filter ParkingRecords to delete.
     * @example
     * // Delete a few ParkingRecords
     * const { count } = await prisma.parkingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingRecordDeleteManyArgs>(args?: SelectSubset<T, ParkingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingRecordUpdateManyArgs>(args: SelectSubset<T, ParkingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingRecords and returns the data updated in the database.
     * @param {ParkingRecordUpdateManyAndReturnArgs} args - Arguments to update many ParkingRecords.
     * @example
     * // Update many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingRecords and only return the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingRecord.
     * @param {ParkingRecordUpsertArgs} args - Arguments to update or create a ParkingRecord.
     * @example
     * // Update or create a ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.upsert({
     *   create: {
     *     // ... data to create a ParkingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingRecord we want to update
     *   }
     * })
     */
    upsert<T extends ParkingRecordUpsertArgs>(args: SelectSubset<T, ParkingRecordUpsertArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordCountArgs} args - Arguments to filter ParkingRecords to count.
     * @example
     * // Count the number of ParkingRecords
     * const count = await prisma.parkingRecord.count({
     *   where: {
     *     // ... the filter for the ParkingRecords we want to count
     *   }
     * })
    **/
    count<T extends ParkingRecordCountArgs>(
      args?: Subset<T, ParkingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingRecordAggregateArgs>(args: Subset<T, ParkingRecordAggregateArgs>): Prisma.PrismaPromise<GetParkingRecordAggregateType<T>>

    /**
     * Group by ParkingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingRecordGroupByArgs['orderBy'] }
        : { orderBy?: ParkingRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingRecord model
   */
  readonly fields: ParkingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends ParkingRecord$requestArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecord$requestArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slot<T extends ParkingSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotDefaultArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingSpot<T extends ParkingRecord$parkingSpotArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecord$parkingSpotArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingRecord model
   */
  interface ParkingRecordFieldRefs {
    readonly id: FieldRef<"ParkingRecord", 'String'>
    readonly requestId: FieldRef<"ParkingRecord", 'String'>
    readonly vehicleId: FieldRef<"ParkingRecord", 'String'>
    readonly slotId: FieldRef<"ParkingRecord", 'String'>
    readonly checkIn: FieldRef<"ParkingRecord", 'DateTime'>
    readonly parkingSpotIdPrisma: FieldRef<"ParkingRecord", 'String'>
    readonly checkOut: FieldRef<"ParkingRecord", 'DateTime'>
    readonly totalHours: FieldRef<"ParkingRecord", 'Float'>
    readonly amountPaid: FieldRef<"ParkingRecord", 'Float'>
    readonly paymentMethod: FieldRef<"ParkingRecord", 'String'>
    readonly createdAt: FieldRef<"ParkingRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingRecord findUnique
   */
  export type ParkingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord findUniqueOrThrow
   */
  export type ParkingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord findFirst
   */
  export type ParkingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingRecords.
     */
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord findFirstOrThrow
   */
  export type ParkingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingRecords.
     */
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord findMany
   */
  export type ParkingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecords to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord create
   */
  export type ParkingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingRecord.
     */
    data: XOR<ParkingRecordCreateInput, ParkingRecordUncheckedCreateInput>
  }

  /**
   * ParkingRecord createMany
   */
  export type ParkingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingRecords.
     */
    data: ParkingRecordCreateManyInput | ParkingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingRecord createManyAndReturn
   */
  export type ParkingRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingRecords.
     */
    data: ParkingRecordCreateManyInput | ParkingRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingRecord update
   */
  export type ParkingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingRecord.
     */
    data: XOR<ParkingRecordUpdateInput, ParkingRecordUncheckedUpdateInput>
    /**
     * Choose, which ParkingRecord to update.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord updateMany
   */
  export type ParkingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingRecords.
     */
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ParkingRecords to update
     */
    where?: ParkingRecordWhereInput
    /**
     * Limit how many ParkingRecords to update.
     */
    limit?: number
  }

  /**
   * ParkingRecord updateManyAndReturn
   */
  export type ParkingRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * The data used to update ParkingRecords.
     */
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ParkingRecords to update
     */
    where?: ParkingRecordWhereInput
    /**
     * Limit how many ParkingRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingRecord upsert
   */
  export type ParkingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingRecord to update in case it exists.
     */
    where: ParkingRecordWhereUniqueInput
    /**
     * In case the ParkingRecord found by the `where` argument doesn't exist, create a new ParkingRecord with this data.
     */
    create: XOR<ParkingRecordCreateInput, ParkingRecordUncheckedCreateInput>
    /**
     * In case the ParkingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingRecordUpdateInput, ParkingRecordUncheckedUpdateInput>
  }

  /**
   * ParkingRecord delete
   */
  export type ParkingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter which ParkingRecord to delete.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord deleteMany
   */
  export type ParkingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingRecords to delete
     */
    where?: ParkingRecordWhereInput
    /**
     * Limit how many ParkingRecords to delete.
     */
    limit?: number
  }

  /**
   * ParkingRecord.request
   */
  export type ParkingRecord$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
  }

  /**
   * ParkingRecord.parkingSpot
   */
  export type ParkingRecord$parkingSpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    where?: ParkingSlotWhereInput
  }

  /**
   * ParkingRecord without action
   */
  export type ParkingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    action: number
    entityType: number
    entityId: number
    userId: number
    ipAddress: number
    userAgent: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    action: string
    entityType: string | null
    entityId: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | Log$userArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | Log$userArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | Log$userArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entityType" | "entityId" | "userId" | "ipAddress" | "userAgent" | "metadata" | "createdAt", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Log$userArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Log$userArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Log$userArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entityType: string | null
      entityId: string | null
      userId: string | null
      ipAddress: string | null
      userAgent: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Log$userArgs<ExtArgs> = {}>(args?: Subset<T, Log$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'String'>
    readonly entityType: FieldRef<"Log", 'String'>
    readonly entityId: FieldRef<"Log", 'String'>
    readonly userId: FieldRef<"Log", 'String'>
    readonly ipAddress: FieldRef<"Log", 'String'>
    readonly userAgent: FieldRef<"Log", 'String'>
    readonly metadata: FieldRef<"Log", 'Json'>
    readonly createdAt: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log.user
   */
  export type Log$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    originalName: 'originalName',
    url: 'url',
    mimeType: 'mimeType',
    size: 'size',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    profilePictureId: 'profilePictureId',
    verificationStatus: 'verificationStatus',
    verificationToken: 'verificationToken',
    verificationExpires: 'verificationExpires',
    resetToken: 'resetToken',
    resetExpires: 'resetExpires',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    type: 'type',
    brand: 'brand',
    size: 'size',
    made: 'made',
    model: 'model',
    color: 'color',
    year: 'year',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const ParkingSlotScalarFieldEnum: {
    id: 'id',
    code: 'code',
    zone: 'zone',
    floor: 'floor',
    type: 'type',
    size: 'size',
    status: 'status',
    hourlyRate: 'hourlyRate',
    isCovered: 'isCovered',
    hasCharger: 'hasCharger',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingSlotScalarFieldEnum = (typeof ParkingSlotScalarFieldEnum)[keyof typeof ParkingSlotScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vehicleId: 'vehicleId',
    slotId: 'slotId',
    status: 'status',
    startTime: 'startTime',
    endTime: 'endTime',
    durationHours: 'durationHours',
    approvedById: 'approvedById',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const ParkingRecordScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    vehicleId: 'vehicleId',
    slotId: 'slotId',
    checkIn: 'checkIn',
    parkingSpotIdPrisma: 'parkingSpotIdPrisma',
    checkOut: 'checkOut',
    totalHours: 'totalHours',
    amountPaid: 'amountPaid',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingRecordScalarFieldEnum = (typeof ParkingRecordScalarFieldEnum)[keyof typeof ParkingRecordScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'VehicleSize'
   */
  export type EnumVehicleSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleSize'>
    


  /**
   * Reference to a field of type 'VehicleSize[]'
   */
  export type ListEnumVehicleSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleSize[]'>
    


  /**
   * Reference to a field of type 'LocationZone'
   */
  export type EnumLocationZoneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationZone'>
    


  /**
   * Reference to a field of type 'LocationZone[]'
   */
  export type ListEnumLocationZoneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationZone[]'>
    


  /**
   * Reference to a field of type 'ParkingStatus'
   */
  export type EnumParkingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingStatus'>
    


  /**
   * Reference to a field of type 'ParkingStatus[]'
   */
  export type ListEnumParkingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    name?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    url?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    userId?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    name?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    url?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    name?: StringWithAggregatesFilter<"File"> | string
    originalName?: StringWithAggregatesFilter<"File"> | string
    url?: StringWithAggregatesFilter<"File"> | string
    mimeType?: StringWithAggregatesFilter<"File"> | string
    size?: IntWithAggregatesFilter<"File"> | number
    userId?: StringNullableWithAggregatesFilter<"File"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profilePictureId?: StringNullableFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"User"> | $Enums.VerificationStatus
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profilePicture?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    vehicles?: VehicleListRelationFilter
    requests?: RequestListRelationFilter
    requestsApproved?: RequestListRelationFilter
    logs?: LogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    profilePictureId?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationExpires?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetExpires?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilePicture?: FileOrderByWithRelationInput
    vehicles?: VehicleOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
    requestsApproved?: RequestOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profilePictureId?: StringNullableFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"User"> | $Enums.VerificationStatus
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profilePicture?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    vehicles?: VehicleListRelationFilter
    requests?: RequestListRelationFilter
    requestsApproved?: RequestListRelationFilter
    logs?: LogListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    profilePictureId?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationExpires?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetExpires?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profilePictureId?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"User"> | $Enums.VerificationStatus
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    plateNumber?: StringFilter<"Vehicle"> | string
    type?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    brand?: StringNullableFilter<"Vehicle"> | string | null
    size?: EnumVehicleSizeFilter<"Vehicle"> | $Enums.VehicleSize
    made?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    year?: IntNullableFilter<"Vehicle"> | number | null
    ownerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: RequestListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    brand?: SortOrderInput | SortOrder
    size?: SortOrder
    made?: SortOrder
    model?: SortOrder
    color?: SortOrder
    year?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    requests?: RequestOrderByRelationAggregateInput
    parkingRecords?: ParkingRecordOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    type?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    brand?: StringNullableFilter<"Vehicle"> | string | null
    size?: EnumVehicleSizeFilter<"Vehicle"> | $Enums.VehicleSize
    made?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    year?: IntNullableFilter<"Vehicle"> | number | null
    ownerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: RequestListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
  }, "id" | "plateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    brand?: SortOrderInput | SortOrder
    size?: SortOrder
    made?: SortOrder
    model?: SortOrder
    color?: SortOrder
    year?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    plateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    type?: EnumVehicleTypeWithAggregatesFilter<"Vehicle"> | $Enums.VehicleType
    brand?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    size?: EnumVehicleSizeWithAggregatesFilter<"Vehicle"> | $Enums.VehicleSize
    made?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    color?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    ownerId?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type ParkingSlotWhereInput = {
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    id?: StringFilter<"ParkingSlot"> | string
    code?: StringFilter<"ParkingSlot"> | string
    zone?: EnumLocationZoneFilter<"ParkingSlot"> | $Enums.LocationZone
    floor?: IntFilter<"ParkingSlot"> | number
    type?: EnumVehicleTypeFilter<"ParkingSlot"> | $Enums.VehicleType
    size?: EnumVehicleSizeFilter<"ParkingSlot"> | $Enums.VehicleSize
    status?: EnumParkingStatusFilter<"ParkingSlot"> | $Enums.ParkingStatus
    hourlyRate?: FloatFilter<"ParkingSlot"> | number
    isCovered?: BoolFilter<"ParkingSlot"> | boolean
    hasCharger?: BoolFilter<"ParkingSlot"> | boolean
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    requests?: RequestListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    parkingSpotRecords?: ParkingRecordListRelationFilter
  }

  export type ParkingSlotOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    zone?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    size?: SortOrder
    status?: SortOrder
    hourlyRate?: SortOrder
    isCovered?: SortOrder
    hasCharger?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requests?: RequestOrderByRelationAggregateInput
    parkingRecords?: ParkingRecordOrderByRelationAggregateInput
    parkingSpotRecords?: ParkingRecordOrderByRelationAggregateInput
  }

  export type ParkingSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    zone?: EnumLocationZoneFilter<"ParkingSlot"> | $Enums.LocationZone
    floor?: IntFilter<"ParkingSlot"> | number
    type?: EnumVehicleTypeFilter<"ParkingSlot"> | $Enums.VehicleType
    size?: EnumVehicleSizeFilter<"ParkingSlot"> | $Enums.VehicleSize
    status?: EnumParkingStatusFilter<"ParkingSlot"> | $Enums.ParkingStatus
    hourlyRate?: FloatFilter<"ParkingSlot"> | number
    isCovered?: BoolFilter<"ParkingSlot"> | boolean
    hasCharger?: BoolFilter<"ParkingSlot"> | boolean
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    requests?: RequestListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    parkingSpotRecords?: ParkingRecordListRelationFilter
  }, "id" | "code">

  export type ParkingSlotOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    zone?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    size?: SortOrder
    status?: SortOrder
    hourlyRate?: SortOrder
    isCovered?: SortOrder
    hasCharger?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingSlotCountOrderByAggregateInput
    _avg?: ParkingSlotAvgOrderByAggregateInput
    _max?: ParkingSlotMaxOrderByAggregateInput
    _min?: ParkingSlotMinOrderByAggregateInput
    _sum?: ParkingSlotSumOrderByAggregateInput
  }

  export type ParkingSlotScalarWhereWithAggregatesInput = {
    AND?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    OR?: ParkingSlotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingSlot"> | string
    code?: StringWithAggregatesFilter<"ParkingSlot"> | string
    zone?: EnumLocationZoneWithAggregatesFilter<"ParkingSlot"> | $Enums.LocationZone
    floor?: IntWithAggregatesFilter<"ParkingSlot"> | number
    type?: EnumVehicleTypeWithAggregatesFilter<"ParkingSlot"> | $Enums.VehicleType
    size?: EnumVehicleSizeWithAggregatesFilter<"ParkingSlot"> | $Enums.VehicleSize
    status?: EnumParkingStatusWithAggregatesFilter<"ParkingSlot"> | $Enums.ParkingStatus
    hourlyRate?: FloatWithAggregatesFilter<"ParkingSlot"> | number
    isCovered?: BoolWithAggregatesFilter<"ParkingSlot"> | boolean
    hasCharger?: BoolWithAggregatesFilter<"ParkingSlot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    userId?: StringFilter<"Request"> | string
    vehicleId?: StringFilter<"Request"> | string
    slotId?: StringNullableFilter<"Request"> | string | null
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    startTime?: DateTimeFilter<"Request"> | Date | string
    endTime?: DateTimeFilter<"Request"> | Date | string
    durationHours?: FloatFilter<"Request"> | number
    approvedById?: StringNullableFilter<"Request"> | string | null
    rejectionReason?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    slot?: XOR<ParkingSlotNullableScalarRelationFilter, ParkingSlotWhereInput> | null
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    parkingRecord?: XOR<ParkingRecordNullableScalarRelationFilter, ParkingRecordWhereInput> | null
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrderInput | SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationHours?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    slot?: ParkingSlotOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
    parkingRecord?: ParkingRecordOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    userId?: StringFilter<"Request"> | string
    vehicleId?: StringFilter<"Request"> | string
    slotId?: StringNullableFilter<"Request"> | string | null
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    startTime?: DateTimeFilter<"Request"> | Date | string
    endTime?: DateTimeFilter<"Request"> | Date | string
    durationHours?: FloatFilter<"Request"> | number
    approvedById?: StringNullableFilter<"Request"> | string | null
    rejectionReason?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    slot?: XOR<ParkingSlotNullableScalarRelationFilter, ParkingSlotWhereInput> | null
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    parkingRecord?: XOR<ParkingRecordNullableScalarRelationFilter, ParkingRecordWhereInput> | null
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrderInput | SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationHours?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    userId?: StringWithAggregatesFilter<"Request"> | string
    vehicleId?: StringWithAggregatesFilter<"Request"> | string
    slotId?: StringNullableWithAggregatesFilter<"Request"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"Request"> | $Enums.RequestStatus
    startTime?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    durationHours?: FloatWithAggregatesFilter<"Request"> | number
    approvedById?: StringNullableWithAggregatesFilter<"Request"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Request"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
  }

  export type ParkingRecordWhereInput = {
    AND?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    OR?: ParkingRecordWhereInput[]
    NOT?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    id?: StringFilter<"ParkingRecord"> | string
    requestId?: StringNullableFilter<"ParkingRecord"> | string | null
    vehicleId?: StringFilter<"ParkingRecord"> | string
    slotId?: StringFilter<"ParkingRecord"> | string
    checkIn?: DateTimeFilter<"ParkingRecord"> | Date | string
    parkingSpotIdPrisma?: StringNullableFilter<"ParkingRecord"> | string | null
    checkOut?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    totalHours?: FloatNullableFilter<"ParkingRecord"> | number | null
    amountPaid?: FloatNullableFilter<"ParkingRecord"> | number | null
    paymentMethod?: StringNullableFilter<"ParkingRecord"> | string | null
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    request?: XOR<RequestNullableScalarRelationFilter, RequestWhereInput> | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    slot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    parkingSpot?: XOR<ParkingSlotNullableScalarRelationFilter, ParkingSlotWhereInput> | null
  }

  export type ParkingRecordOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    checkIn?: SortOrder
    parkingSpotIdPrisma?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    totalHours?: SortOrderInput | SortOrder
    amountPaid?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    request?: RequestOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    slot?: ParkingSlotOrderByWithRelationInput
    parkingSpot?: ParkingSlotOrderByWithRelationInput
  }

  export type ParkingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    OR?: ParkingRecordWhereInput[]
    NOT?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    vehicleId?: StringFilter<"ParkingRecord"> | string
    slotId?: StringFilter<"ParkingRecord"> | string
    checkIn?: DateTimeFilter<"ParkingRecord"> | Date | string
    parkingSpotIdPrisma?: StringNullableFilter<"ParkingRecord"> | string | null
    checkOut?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    totalHours?: FloatNullableFilter<"ParkingRecord"> | number | null
    amountPaid?: FloatNullableFilter<"ParkingRecord"> | number | null
    paymentMethod?: StringNullableFilter<"ParkingRecord"> | string | null
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    request?: XOR<RequestNullableScalarRelationFilter, RequestWhereInput> | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    slot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    parkingSpot?: XOR<ParkingSlotNullableScalarRelationFilter, ParkingSlotWhereInput> | null
  }, "id" | "requestId">

  export type ParkingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    checkIn?: SortOrder
    parkingSpotIdPrisma?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    totalHours?: SortOrderInput | SortOrder
    amountPaid?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingRecordCountOrderByAggregateInput
    _avg?: ParkingRecordAvgOrderByAggregateInput
    _max?: ParkingRecordMaxOrderByAggregateInput
    _min?: ParkingRecordMinOrderByAggregateInput
    _sum?: ParkingRecordSumOrderByAggregateInput
  }

  export type ParkingRecordScalarWhereWithAggregatesInput = {
    AND?: ParkingRecordScalarWhereWithAggregatesInput | ParkingRecordScalarWhereWithAggregatesInput[]
    OR?: ParkingRecordScalarWhereWithAggregatesInput[]
    NOT?: ParkingRecordScalarWhereWithAggregatesInput | ParkingRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingRecord"> | string
    requestId?: StringNullableWithAggregatesFilter<"ParkingRecord"> | string | null
    vehicleId?: StringWithAggregatesFilter<"ParkingRecord"> | string
    slotId?: StringWithAggregatesFilter<"ParkingRecord"> | string
    checkIn?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
    parkingSpotIdPrisma?: StringNullableWithAggregatesFilter<"ParkingRecord"> | string | null
    checkOut?: DateTimeNullableWithAggregatesFilter<"ParkingRecord"> | Date | string | null
    totalHours?: FloatNullableWithAggregatesFilter<"ParkingRecord"> | number | null
    amountPaid?: FloatNullableWithAggregatesFilter<"ParkingRecord"> | number | null
    paymentMethod?: StringNullableWithAggregatesFilter<"ParkingRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    entityType?: StringNullableFilter<"Log"> | string | null
    entityId?: StringNullableFilter<"Log"> | string | null
    userId?: StringNullableFilter<"Log"> | string | null
    ipAddress?: StringNullableFilter<"Log"> | string | null
    userAgent?: StringNullableFilter<"Log"> | string | null
    metadata?: JsonNullableFilter<"Log">
    createdAt?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    action?: StringFilter<"Log"> | string
    entityType?: StringNullableFilter<"Log"> | string | null
    entityId?: StringNullableFilter<"Log"> | string | null
    userId?: StringNullableFilter<"Log"> | string | null
    ipAddress?: StringNullableFilter<"Log"> | string | null
    userAgent?: StringNullableFilter<"Log"> | string | null
    metadata?: JsonNullableFilter<"Log">
    createdAt?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    action?: StringWithAggregatesFilter<"Log"> | string
    entityType?: StringNullableWithAggregatesFilter<"Log"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Log"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Log"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Log">
    createdAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type FileCreateInput = {
    id?: string
    name: string
    originalName: string
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfilePictureInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    name: string
    originalName: string
    url: string
    mimeType: string
    size: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfilePictureNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInput = {
    id?: string
    name: string
    originalName: string
    url: string
    mimeType: string
    size: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileCreateNestedOneWithoutUserInput
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutUserInput
    requestsApproved?: RequestCreateNestedManyWithoutApprovedByInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileUncheckedCreateNestedOneWithoutUserInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    requestsApproved?: RequestUncheckedCreateNestedManyWithoutApprovedByInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUpdateManyWithoutApprovedByNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUncheckedUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUncheckedUpdateManyWithoutApprovedByNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
    requests?: RequestCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    requests?: RequestUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotCreateInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestCreateNestedManyWithoutSlotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutSlotInput
    parkingSpotRecords?: ParkingRecordCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSlotUncheckedCreateInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutSlotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutSlotInput
    parkingSpotRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUpdateManyWithoutSlotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutSlotNestedInput
    parkingSpotRecords?: ParkingRecordUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutSlotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutSlotNestedInput
    parkingSpotRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSlotCreateManyInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateInput = {
    id?: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    vehicle: VehicleCreateNestedOneWithoutRequestsInput
    slot?: ParkingSlotCreateNestedOneWithoutRequestsInput
    approvedBy?: UserCreateNestedOneWithoutRequestsApprovedInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    userId: string
    vehicleId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRequestsNestedInput
    slot?: ParkingSlotUpdateOneWithoutRequestsNestedInput
    approvedBy?: UserUpdateOneWithoutRequestsApprovedNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestCreateManyInput = {
    id?: string
    userId: string
    vehicleId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordCreateInput = {
    id?: string
    checkIn?: Date | string
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: RequestCreateNestedOneWithoutParkingRecordInput
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    slot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
    parkingSpot?: ParkingSlotCreateNestedOneWithoutParkingSpotRecordsInput
  }

  export type ParkingRecordUncheckedCreateInput = {
    id?: string
    requestId?: string | null
    vehicleId: string
    slotId: string
    checkIn?: Date | string
    parkingSpotIdPrisma?: string | null
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneWithoutParkingRecordNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    slot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSpot?: ParkingSlotUpdateOneWithoutParkingSpotRecordsNestedInput
  }

  export type ParkingRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotIdPrisma?: NullableStringFieldUpdateOperationsInput | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordCreateManyInput = {
    id?: string
    requestId?: string | null
    vehicleId: string
    slotId: string
    checkIn?: Date | string
    parkingSpotIdPrisma?: string | null
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotIdPrisma?: NullableStringFieldUpdateOperationsInput | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    userId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    userId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FileNullableScalarRelationFilter = {
    is?: FileWhereInput | null
    isNot?: FileWhereInput | null
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profilePictureId?: SortOrder
    verificationStatus?: SortOrder
    verificationToken?: SortOrder
    verificationExpires?: SortOrder
    resetToken?: SortOrder
    resetExpires?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profilePictureId?: SortOrder
    verificationStatus?: SortOrder
    verificationToken?: SortOrder
    verificationExpires?: SortOrder
    resetToken?: SortOrder
    resetExpires?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profilePictureId?: SortOrder
    verificationStatus?: SortOrder
    verificationToken?: SortOrder
    verificationExpires?: SortOrder
    resetToken?: SortOrder
    resetExpires?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type EnumVehicleSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleSize | EnumVehicleSizeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleSizeFilter<$PrismaModel> | $Enums.VehicleSize
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParkingRecordListRelationFilter = {
    every?: ParkingRecordWhereInput
    some?: ParkingRecordWhereInput
    none?: ParkingRecordWhereInput
  }

  export type ParkingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    made?: SortOrder
    model?: SortOrder
    color?: SortOrder
    year?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    made?: SortOrder
    model?: SortOrder
    color?: SortOrder
    year?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    size?: SortOrder
    made?: SortOrder
    model?: SortOrder
    color?: SortOrder
    year?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type EnumVehicleSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleSize | EnumVehicleSizeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleSizeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleSizeFilter<$PrismaModel>
    _max?: NestedEnumVehicleSizeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLocationZoneFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationZone | EnumLocationZoneFieldRefInput<$PrismaModel>
    in?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationZoneFilter<$PrismaModel> | $Enums.LocationZone
  }

  export type EnumParkingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingStatus | EnumParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingStatusFilter<$PrismaModel> | $Enums.ParkingStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ParkingSlotCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    zone?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    size?: SortOrder
    status?: SortOrder
    hourlyRate?: SortOrder
    isCovered?: SortOrder
    hasCharger?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotAvgOrderByAggregateInput = {
    floor?: SortOrder
    hourlyRate?: SortOrder
  }

  export type ParkingSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    zone?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    size?: SortOrder
    status?: SortOrder
    hourlyRate?: SortOrder
    isCovered?: SortOrder
    hasCharger?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    zone?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    size?: SortOrder
    status?: SortOrder
    hourlyRate?: SortOrder
    isCovered?: SortOrder
    hasCharger?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotSumOrderByAggregateInput = {
    floor?: SortOrder
    hourlyRate?: SortOrder
  }

  export type EnumLocationZoneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationZone | EnumLocationZoneFieldRefInput<$PrismaModel>
    in?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationZoneWithAggregatesFilter<$PrismaModel> | $Enums.LocationZone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationZoneFilter<$PrismaModel>
    _max?: NestedEnumLocationZoneFilter<$PrismaModel>
  }

  export type EnumParkingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingStatus | EnumParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingStatusFilter<$PrismaModel>
    _max?: NestedEnumParkingStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ParkingSlotNullableScalarRelationFilter = {
    is?: ParkingSlotWhereInput | null
    isNot?: ParkingSlotWhereInput | null
  }

  export type ParkingRecordNullableScalarRelationFilter = {
    is?: ParkingRecordWhereInput | null
    isNot?: ParkingRecordWhereInput | null
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationHours?: SortOrder
    approvedById?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    durationHours?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationHours?: SortOrder
    approvedById?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationHours?: SortOrder
    approvedById?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    durationHours?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RequestNullableScalarRelationFilter = {
    is?: RequestWhereInput | null
    isNot?: RequestWhereInput | null
  }

  export type ParkingSlotScalarRelationFilter = {
    is?: ParkingSlotWhereInput
    isNot?: ParkingSlotWhereInput
  }

  export type ParkingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    checkIn?: SortOrder
    parkingSpotIdPrisma?: SortOrder
    checkOut?: SortOrder
    totalHours?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingRecordAvgOrderByAggregateInput = {
    totalHours?: SortOrder
    amountPaid?: SortOrder
  }

  export type ParkingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    checkIn?: SortOrder
    parkingSpotIdPrisma?: SortOrder
    checkOut?: SortOrder
    totalHours?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    vehicleId?: SortOrder
    slotId?: SortOrder
    checkIn?: SortOrder
    parkingSpotIdPrisma?: SortOrder
    checkOut?: SortOrder
    totalHours?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingRecordSumOrderByAggregateInput = {
    totalHours?: SortOrder
    amountPaid?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutProfilePictureInput = {
    create?: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilePictureInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutProfilePictureNestedInput = {
    create?: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilePictureInput
    upsert?: UserUpsertWithoutProfilePictureInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfilePictureInput, UserUpdateWithoutProfilePictureInput>, UserUncheckedUpdateWithoutProfilePictureInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FileCreateNestedOneWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FileCreateOrConnectWithoutUserInput
    connect?: FileWhereUniqueInput
  }

  export type VehicleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<RequestCreateWithoutApprovedByInput, RequestUncheckedCreateWithoutApprovedByInput> | RequestCreateWithoutApprovedByInput[] | RequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApprovedByInput | RequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: RequestCreateManyApprovedByInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FileCreateOrConnectWithoutUserInput
    connect?: FileWhereUniqueInput
  }

  export type VehicleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<RequestCreateWithoutApprovedByInput, RequestUncheckedCreateWithoutApprovedByInput> | RequestCreateWithoutApprovedByInput[] | RequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApprovedByInput | RequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: RequestCreateManyApprovedByInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FileUpdateOneWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FileCreateOrConnectWithoutUserInput
    upsert?: FileUpsertWithoutUserInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutUserInput, FileUpdateWithoutUserInput>, FileUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<RequestCreateWithoutApprovedByInput, RequestUncheckedCreateWithoutApprovedByInput> | RequestCreateWithoutApprovedByInput[] | RequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApprovedByInput | RequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutApprovedByInput | RequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: RequestCreateManyApprovedByInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutApprovedByInput | RequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutApprovedByInput | RequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type FileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FileCreateOrConnectWithoutUserInput
    upsert?: FileUpsertWithoutUserInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutUserInput, FileUpdateWithoutUserInput>, FileUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<RequestCreateWithoutApprovedByInput, RequestUncheckedCreateWithoutApprovedByInput> | RequestCreateWithoutApprovedByInput[] | RequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApprovedByInput | RequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutApprovedByInput | RequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: RequestCreateManyApprovedByInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutApprovedByInput | RequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutApprovedByInput | RequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type RequestCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RequestCreateWithoutVehicleInput, RequestUncheckedCreateWithoutVehicleInput> | RequestCreateWithoutVehicleInput[] | RequestUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutVehicleInput | RequestCreateOrConnectWithoutVehicleInput[]
    createMany?: RequestCreateManyVehicleInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RequestCreateWithoutVehicleInput, RequestUncheckedCreateWithoutVehicleInput> | RequestCreateWithoutVehicleInput[] | RequestUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutVehicleInput | RequestCreateOrConnectWithoutVehicleInput[]
    createMany?: RequestCreateManyVehicleInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type EnumVehicleSizeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleSize
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type RequestUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RequestCreateWithoutVehicleInput, RequestUncheckedCreateWithoutVehicleInput> | RequestCreateWithoutVehicleInput[] | RequestUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutVehicleInput | RequestCreateOrConnectWithoutVehicleInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutVehicleInput | RequestUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RequestCreateManyVehicleInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutVehicleInput | RequestUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutVehicleInput | RequestUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput | ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput | ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutVehicleInput | ParkingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RequestCreateWithoutVehicleInput, RequestUncheckedCreateWithoutVehicleInput> | RequestCreateWithoutVehicleInput[] | RequestUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutVehicleInput | RequestCreateOrConnectWithoutVehicleInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutVehicleInput | RequestUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RequestCreateManyVehicleInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutVehicleInput | RequestUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutVehicleInput | RequestUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput | ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput | ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutVehicleInput | ParkingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type RequestCreateNestedManyWithoutSlotInput = {
    create?: XOR<RequestCreateWithoutSlotInput, RequestUncheckedCreateWithoutSlotInput> | RequestCreateWithoutSlotInput[] | RequestUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSlotInput | RequestCreateOrConnectWithoutSlotInput[]
    createMany?: RequestCreateManySlotInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutSlotInput = {
    create?: XOR<ParkingRecordCreateWithoutSlotInput, ParkingRecordUncheckedCreateWithoutSlotInput> | ParkingRecordCreateWithoutSlotInput[] | ParkingRecordUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutSlotInput | ParkingRecordCreateOrConnectWithoutSlotInput[]
    createMany?: ParkingRecordCreateManySlotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutParkingSpotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<RequestCreateWithoutSlotInput, RequestUncheckedCreateWithoutSlotInput> | RequestCreateWithoutSlotInput[] | RequestUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSlotInput | RequestCreateOrConnectWithoutSlotInput[]
    createMany?: RequestCreateManySlotInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<ParkingRecordCreateWithoutSlotInput, ParkingRecordUncheckedCreateWithoutSlotInput> | ParkingRecordCreateWithoutSlotInput[] | ParkingRecordUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutSlotInput | ParkingRecordCreateOrConnectWithoutSlotInput[]
    createMany?: ParkingRecordCreateManySlotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type EnumLocationZoneFieldUpdateOperationsInput = {
    set?: $Enums.LocationZone
  }

  export type EnumParkingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParkingStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RequestUpdateManyWithoutSlotNestedInput = {
    create?: XOR<RequestCreateWithoutSlotInput, RequestUncheckedCreateWithoutSlotInput> | RequestCreateWithoutSlotInput[] | RequestUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSlotInput | RequestCreateOrConnectWithoutSlotInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutSlotInput | RequestUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: RequestCreateManySlotInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutSlotInput | RequestUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutSlotInput | RequestUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutSlotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutSlotInput, ParkingRecordUncheckedCreateWithoutSlotInput> | ParkingRecordCreateWithoutSlotInput[] | ParkingRecordUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutSlotInput | ParkingRecordCreateOrConnectWithoutSlotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutSlotInput | ParkingRecordUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: ParkingRecordCreateManySlotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutSlotInput | ParkingRecordUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutSlotInput | ParkingRecordUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutParkingSpotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput | ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<RequestCreateWithoutSlotInput, RequestUncheckedCreateWithoutSlotInput> | RequestCreateWithoutSlotInput[] | RequestUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSlotInput | RequestCreateOrConnectWithoutSlotInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutSlotInput | RequestUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: RequestCreateManySlotInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutSlotInput | RequestUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutSlotInput | RequestUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutSlotInput, ParkingRecordUncheckedCreateWithoutSlotInput> | ParkingRecordCreateWithoutSlotInput[] | ParkingRecordUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutSlotInput | ParkingRecordCreateOrConnectWithoutSlotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutSlotInput | ParkingRecordUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: ParkingRecordCreateManySlotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutSlotInput | ParkingRecordUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutSlotInput | ParkingRecordUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput | ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutRequestsInput = {
    create?: XOR<VehicleCreateWithoutRequestsInput, VehicleUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRequestsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ParkingSlotCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ParkingSlotCreateWithoutRequestsInput, ParkingSlotUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutRequestsInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsApprovedInput = {
    create?: XOR<UserCreateWithoutRequestsApprovedInput, UserUncheckedCreateWithoutRequestsApprovedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsApprovedInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingRecordCreateNestedOneWithoutRequestInput = {
    create?: XOR<ParkingRecordCreateWithoutRequestInput, ParkingRecordUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutRequestInput
    connect?: ParkingRecordWhereUniqueInput
  }

  export type ParkingRecordUncheckedCreateNestedOneWithoutRequestInput = {
    create?: XOR<ParkingRecordCreateWithoutRequestInput, ParkingRecordUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutRequestInput
    connect?: ParkingRecordWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type VehicleUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<VehicleCreateWithoutRequestsInput, VehicleUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRequestsInput
    upsert?: VehicleUpsertWithoutRequestsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutRequestsInput, VehicleUpdateWithoutRequestsInput>, VehicleUncheckedUpdateWithoutRequestsInput>
  }

  export type ParkingSlotUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutRequestsInput, ParkingSlotUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutRequestsInput
    upsert?: ParkingSlotUpsertWithoutRequestsInput
    disconnect?: ParkingSlotWhereInput | boolean
    delete?: ParkingSlotWhereInput | boolean
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutRequestsInput, ParkingSlotUpdateWithoutRequestsInput>, ParkingSlotUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneWithoutRequestsApprovedNestedInput = {
    create?: XOR<UserCreateWithoutRequestsApprovedInput, UserUncheckedCreateWithoutRequestsApprovedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsApprovedInput
    upsert?: UserUpsertWithoutRequestsApprovedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsApprovedInput, UserUpdateWithoutRequestsApprovedInput>, UserUncheckedUpdateWithoutRequestsApprovedInput>
  }

  export type ParkingRecordUpdateOneWithoutRequestNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutRequestInput, ParkingRecordUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutRequestInput
    upsert?: ParkingRecordUpsertWithoutRequestInput
    disconnect?: ParkingRecordWhereInput | boolean
    delete?: ParkingRecordWhereInput | boolean
    connect?: ParkingRecordWhereUniqueInput
    update?: XOR<XOR<ParkingRecordUpdateToOneWithWhereWithoutRequestInput, ParkingRecordUpdateWithoutRequestInput>, ParkingRecordUncheckedUpdateWithoutRequestInput>
  }

  export type ParkingRecordUncheckedUpdateOneWithoutRequestNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutRequestInput, ParkingRecordUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutRequestInput
    upsert?: ParkingRecordUpsertWithoutRequestInput
    disconnect?: ParkingRecordWhereInput | boolean
    delete?: ParkingRecordWhereInput | boolean
    connect?: ParkingRecordWhereUniqueInput
    update?: XOR<XOR<ParkingRecordUpdateToOneWithWhereWithoutRequestInput, ParkingRecordUpdateWithoutRequestInput>, ParkingRecordUncheckedUpdateWithoutRequestInput>
  }

  export type RequestCreateNestedOneWithoutParkingRecordInput = {
    create?: XOR<RequestCreateWithoutParkingRecordInput, RequestUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: RequestCreateOrConnectWithoutParkingRecordInput
    connect?: RequestWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutParkingRecordsInput = {
    create?: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingRecordsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ParkingSlotCreateNestedOneWithoutParkingRecordsInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingRecordsInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type ParkingSlotCreateNestedOneWithoutParkingSpotRecordsInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingSpotRecordsInput, ParkingSlotUncheckedCreateWithoutParkingSpotRecordsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingSpotRecordsInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RequestUpdateOneWithoutParkingRecordNestedInput = {
    create?: XOR<RequestCreateWithoutParkingRecordInput, RequestUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: RequestCreateOrConnectWithoutParkingRecordInput
    upsert?: RequestUpsertWithoutParkingRecordInput
    disconnect?: RequestWhereInput | boolean
    delete?: RequestWhereInput | boolean
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutParkingRecordInput, RequestUpdateWithoutParkingRecordInput>, RequestUncheckedUpdateWithoutParkingRecordInput>
  }

  export type VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput = {
    create?: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingRecordsInput
    upsert?: VehicleUpsertWithoutParkingRecordsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutParkingRecordsInput, VehicleUpdateWithoutParkingRecordsInput>, VehicleUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingRecordsInput
    upsert?: ParkingSlotUpsertWithoutParkingRecordsInput
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutParkingRecordsInput, ParkingSlotUpdateWithoutParkingRecordsInput>, ParkingSlotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingSlotUpdateOneWithoutParkingSpotRecordsNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingSpotRecordsInput, ParkingSlotUncheckedCreateWithoutParkingSpotRecordsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingSpotRecordsInput
    upsert?: ParkingSlotUpsertWithoutParkingSpotRecordsInput
    disconnect?: ParkingSlotWhereInput | boolean
    delete?: ParkingSlotWhereInput | boolean
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutParkingSpotRecordsInput, ParkingSlotUpdateWithoutParkingSpotRecordsInput>, ParkingSlotUncheckedUpdateWithoutParkingSpotRecordsInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumVehicleSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleSize | EnumVehicleSizeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleSizeFilter<$PrismaModel> | $Enums.VehicleSize
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedEnumVehicleSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleSize | EnumVehicleSizeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleSize[] | ListEnumVehicleSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleSizeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleSizeFilter<$PrismaModel>
    _max?: NestedEnumVehicleSizeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLocationZoneFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationZone | EnumLocationZoneFieldRefInput<$PrismaModel>
    in?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationZoneFilter<$PrismaModel> | $Enums.LocationZone
  }

  export type NestedEnumParkingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingStatus | EnumParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingStatusFilter<$PrismaModel> | $Enums.ParkingStatus
  }

  export type NestedEnumLocationZoneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationZone | EnumLocationZoneFieldRefInput<$PrismaModel>
    in?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationZone[] | ListEnumLocationZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationZoneWithAggregatesFilter<$PrismaModel> | $Enums.LocationZone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationZoneFilter<$PrismaModel>
    _max?: NestedEnumLocationZoneFilter<$PrismaModel>
  }

  export type NestedEnumParkingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingStatus | EnumParkingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingStatus[] | ListEnumParkingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingStatusFilter<$PrismaModel>
    _max?: NestedEnumParkingStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutProfilePictureInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutUserInput
    requestsApproved?: RequestCreateNestedManyWithoutApprovedByInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfilePictureInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    requestsApproved?: RequestUncheckedCreateNestedManyWithoutApprovedByInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfilePictureInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput>
  }

  export type UserUpsertWithoutProfilePictureInput = {
    update: XOR<UserUpdateWithoutProfilePictureInput, UserUncheckedUpdateWithoutProfilePictureInput>
    create: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfilePictureInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfilePictureInput, UserUncheckedUpdateWithoutProfilePictureInput>
  }

  export type UserUpdateWithoutProfilePictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUpdateManyWithoutApprovedByNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilePictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUncheckedUpdateManyWithoutApprovedByNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FileCreateWithoutUserInput = {
    id?: string
    name: string
    originalName: string
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    originalName: string
    url: string
    mimeType: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutUserInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type VehicleCreateWithoutOwnerInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutOwnerInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleCreateManyOwnerInputEnvelope = {
    data: VehicleCreateManyOwnerInput | VehicleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutUserInput = {
    id?: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutRequestsInput
    slot?: ParkingSlotCreateNestedOneWithoutRequestsInput
    approvedBy?: UserCreateNestedOneWithoutRequestsApprovedInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutUserInput = {
    id?: string
    vehicleId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateManyUserInputEnvelope = {
    data: RequestCreateManyUserInput | RequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutApprovedByInput = {
    id?: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    vehicle: VehicleCreateNestedOneWithoutRequestsInput
    slot?: ParkingSlotCreateNestedOneWithoutRequestsInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutApprovedByInput = {
    id?: string
    userId: string
    vehicleId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutApprovedByInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutApprovedByInput, RequestUncheckedCreateWithoutApprovedByInput>
  }

  export type RequestCreateManyApprovedByInputEnvelope = {
    data: RequestCreateManyApprovedByInput | RequestCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutUserInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithoutUserInput = {
    update: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutUserInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
  }

  export type FileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutOwnerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    plateNumber?: StringFilter<"Vehicle"> | string
    type?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    brand?: StringNullableFilter<"Vehicle"> | string | null
    size?: EnumVehicleSizeFilter<"Vehicle"> | $Enums.VehicleSize
    made?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    year?: IntNullableFilter<"Vehicle"> | number | null
    ownerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type RequestUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    userId?: StringFilter<"Request"> | string
    vehicleId?: StringFilter<"Request"> | string
    slotId?: StringNullableFilter<"Request"> | string | null
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    startTime?: DateTimeFilter<"Request"> | Date | string
    endTime?: DateTimeFilter<"Request"> | Date | string
    durationHours?: FloatFilter<"Request"> | number
    approvedById?: StringNullableFilter<"Request"> | string | null
    rejectionReason?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
  }

  export type RequestUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutApprovedByInput, RequestUncheckedUpdateWithoutApprovedByInput>
    create: XOR<RequestCreateWithoutApprovedByInput, RequestUncheckedCreateWithoutApprovedByInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutApprovedByInput, RequestUncheckedUpdateWithoutApprovedByInput>
  }

  export type RequestUpdateManyWithWhereWithoutApprovedByInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    entityType?: StringNullableFilter<"Log"> | string | null
    entityId?: StringNullableFilter<"Log"> | string | null
    userId?: StringNullableFilter<"Log"> | string | null
    ipAddress?: StringNullableFilter<"Log"> | string | null
    userAgent?: StringNullableFilter<"Log"> | string | null
    metadata?: JsonNullableFilter<"Log">
    createdAt?: DateTimeFilter<"Log"> | Date | string
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileCreateNestedOneWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    requestsApproved?: RequestCreateNestedManyWithoutApprovedByInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileUncheckedCreateNestedOneWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    requestsApproved?: RequestUncheckedCreateNestedManyWithoutApprovedByInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type RequestCreateWithoutVehicleInput = {
    id?: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    slot?: ParkingSlotCreateNestedOneWithoutRequestsInput
    approvedBy?: UserCreateNestedOneWithoutRequestsApprovedInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutVehicleInput = {
    id?: string
    userId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutVehicleInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutVehicleInput, RequestUncheckedCreateWithoutVehicleInput>
  }

  export type RequestCreateManyVehicleInputEnvelope = {
    data: RequestCreateManyVehicleInput | RequestCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutVehicleInput = {
    id?: string
    checkIn?: Date | string
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: RequestCreateNestedOneWithoutParkingRecordInput
    slot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
    parkingSpot?: ParkingSlotCreateNestedOneWithoutParkingSpotRecordsInput
  }

  export type ParkingRecordUncheckedCreateWithoutVehicleInput = {
    id?: string
    requestId?: string | null
    slotId: string
    checkIn?: Date | string
    parkingSpotIdPrisma?: string | null
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateOrConnectWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingRecordCreateManyVehicleInputEnvelope = {
    data: ParkingRecordCreateManyVehicleInput | ParkingRecordCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUpdateOneWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUpdateManyWithoutApprovedByNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUncheckedUpdateOneWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUncheckedUpdateManyWithoutApprovedByNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RequestUpsertWithWhereUniqueWithoutVehicleInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutVehicleInput, RequestUncheckedUpdateWithoutVehicleInput>
    create: XOR<RequestCreateWithoutVehicleInput, RequestUncheckedCreateWithoutVehicleInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutVehicleInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutVehicleInput, RequestUncheckedUpdateWithoutVehicleInput>
  }

  export type RequestUpdateManyWithWhereWithoutVehicleInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutVehicleInput, ParkingRecordUncheckedUpdateWithoutVehicleInput>
    create: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutVehicleInput, ParkingRecordUncheckedUpdateWithoutVehicleInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ParkingRecordScalarWhereInput = {
    AND?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
    OR?: ParkingRecordScalarWhereInput[]
    NOT?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
    id?: StringFilter<"ParkingRecord"> | string
    requestId?: StringNullableFilter<"ParkingRecord"> | string | null
    vehicleId?: StringFilter<"ParkingRecord"> | string
    slotId?: StringFilter<"ParkingRecord"> | string
    checkIn?: DateTimeFilter<"ParkingRecord"> | Date | string
    parkingSpotIdPrisma?: StringNullableFilter<"ParkingRecord"> | string | null
    checkOut?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    totalHours?: FloatNullableFilter<"ParkingRecord"> | number | null
    amountPaid?: FloatNullableFilter<"ParkingRecord"> | number | null
    paymentMethod?: StringNullableFilter<"ParkingRecord"> | string | null
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
  }

  export type RequestCreateWithoutSlotInput = {
    id?: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    vehicle: VehicleCreateNestedOneWithoutRequestsInput
    approvedBy?: UserCreateNestedOneWithoutRequestsApprovedInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutSlotInput = {
    id?: string
    userId: string
    vehicleId: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutSlotInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutSlotInput, RequestUncheckedCreateWithoutSlotInput>
  }

  export type RequestCreateManySlotInputEnvelope = {
    data: RequestCreateManySlotInput | RequestCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutSlotInput = {
    id?: string
    checkIn?: Date | string
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: RequestCreateNestedOneWithoutParkingRecordInput
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingSpot?: ParkingSlotCreateNestedOneWithoutParkingSpotRecordsInput
  }

  export type ParkingRecordUncheckedCreateWithoutSlotInput = {
    id?: string
    requestId?: string | null
    vehicleId: string
    checkIn?: Date | string
    parkingSpotIdPrisma?: string | null
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateOrConnectWithoutSlotInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutSlotInput, ParkingRecordUncheckedCreateWithoutSlotInput>
  }

  export type ParkingRecordCreateManySlotInputEnvelope = {
    data: ParkingRecordCreateManySlotInput | ParkingRecordCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutParkingSpotInput = {
    id?: string
    checkIn?: Date | string
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: RequestCreateNestedOneWithoutParkingRecordInput
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    slot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
  }

  export type ParkingRecordUncheckedCreateWithoutParkingSpotInput = {
    id?: string
    requestId?: string | null
    vehicleId: string
    slotId: string
    checkIn?: Date | string
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateOrConnectWithoutParkingSpotInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput>
  }

  export type ParkingRecordCreateManyParkingSpotInputEnvelope = {
    data: ParkingRecordCreateManyParkingSpotInput | ParkingRecordCreateManyParkingSpotInput[]
    skipDuplicates?: boolean
  }

  export type RequestUpsertWithWhereUniqueWithoutSlotInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutSlotInput, RequestUncheckedUpdateWithoutSlotInput>
    create: XOR<RequestCreateWithoutSlotInput, RequestUncheckedCreateWithoutSlotInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutSlotInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutSlotInput, RequestUncheckedUpdateWithoutSlotInput>
  }

  export type RequestUpdateManyWithWhereWithoutSlotInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutSlotInput>
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutSlotInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutSlotInput, ParkingRecordUncheckedUpdateWithoutSlotInput>
    create: XOR<ParkingRecordCreateWithoutSlotInput, ParkingRecordUncheckedCreateWithoutSlotInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutSlotInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutSlotInput, ParkingRecordUncheckedUpdateWithoutSlotInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutSlotInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutSlotInput>
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutParkingSpotInput, ParkingRecordUncheckedUpdateWithoutParkingSpotInput>
    create: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutParkingSpotInput, ParkingRecordUncheckedUpdateWithoutParkingSpotInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutParkingSpotInput>
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileCreateNestedOneWithoutUserInput
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    requestsApproved?: RequestCreateNestedManyWithoutApprovedByInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileUncheckedCreateNestedOneWithoutUserInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    requestsApproved?: RequestUncheckedCreateNestedManyWithoutApprovedByInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type VehicleCreateWithoutRequestsInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutRequestsInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutRequestsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutRequestsInput, VehicleUncheckedCreateWithoutRequestsInput>
  }

  export type ParkingSlotCreateWithoutRequestsInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecords?: ParkingRecordCreateNestedManyWithoutSlotInput
    parkingSpotRecords?: ParkingRecordCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSlotUncheckedCreateWithoutRequestsInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutSlotInput
    parkingSpotRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSlotCreateOrConnectWithoutRequestsInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutRequestsInput, ParkingSlotUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsApprovedInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileCreateNestedOneWithoutUserInput
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsApprovedInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileUncheckedCreateNestedOneWithoutUserInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsApprovedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsApprovedInput, UserUncheckedCreateWithoutRequestsApprovedInput>
  }

  export type ParkingRecordCreateWithoutRequestInput = {
    id?: string
    checkIn?: Date | string
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    slot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
    parkingSpot?: ParkingSlotCreateNestedOneWithoutParkingSpotRecordsInput
  }

  export type ParkingRecordUncheckedCreateWithoutRequestInput = {
    id?: string
    vehicleId: string
    slotId: string
    checkIn?: Date | string
    parkingSpotIdPrisma?: string | null
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateOrConnectWithoutRequestInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutRequestInput, ParkingRecordUncheckedCreateWithoutRequestInput>
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    requestsApproved?: RequestUpdateManyWithoutApprovedByNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUncheckedUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    requestsApproved?: RequestUncheckedUpdateManyWithoutApprovedByNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VehicleUpsertWithoutRequestsInput = {
    update: XOR<VehicleUpdateWithoutRequestsInput, VehicleUncheckedUpdateWithoutRequestsInput>
    create: XOR<VehicleCreateWithoutRequestsInput, VehicleUncheckedCreateWithoutRequestsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutRequestsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutRequestsInput, VehicleUncheckedUpdateWithoutRequestsInput>
  }

  export type VehicleUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ParkingSlotUpsertWithoutRequestsInput = {
    update: XOR<ParkingSlotUpdateWithoutRequestsInput, ParkingSlotUncheckedUpdateWithoutRequestsInput>
    create: XOR<ParkingSlotCreateWithoutRequestsInput, ParkingSlotUncheckedCreateWithoutRequestsInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutRequestsInput, ParkingSlotUncheckedUpdateWithoutRequestsInput>
  }

  export type ParkingSlotUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecords?: ParkingRecordUpdateManyWithoutSlotNestedInput
    parkingSpotRecords?: ParkingRecordUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutSlotNestedInput
    parkingSpotRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput
  }

  export type UserUpsertWithoutRequestsApprovedInput = {
    update: XOR<UserUpdateWithoutRequestsApprovedInput, UserUncheckedUpdateWithoutRequestsApprovedInput>
    create: XOR<UserCreateWithoutRequestsApprovedInput, UserUncheckedCreateWithoutRequestsApprovedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsApprovedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsApprovedInput, UserUncheckedUpdateWithoutRequestsApprovedInput>
  }

  export type UserUpdateWithoutRequestsApprovedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsApprovedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUncheckedUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingRecordUpsertWithoutRequestInput = {
    update: XOR<ParkingRecordUpdateWithoutRequestInput, ParkingRecordUncheckedUpdateWithoutRequestInput>
    create: XOR<ParkingRecordCreateWithoutRequestInput, ParkingRecordUncheckedCreateWithoutRequestInput>
    where?: ParkingRecordWhereInput
  }

  export type ParkingRecordUpdateToOneWithWhereWithoutRequestInput = {
    where?: ParkingRecordWhereInput
    data: XOR<ParkingRecordUpdateWithoutRequestInput, ParkingRecordUncheckedUpdateWithoutRequestInput>
  }

  export type ParkingRecordUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    slot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSpot?: ParkingSlotUpdateOneWithoutParkingSpotRecordsNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotIdPrisma?: NullableStringFieldUpdateOperationsInput | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateWithoutParkingRecordInput = {
    id?: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    vehicle: VehicleCreateNestedOneWithoutRequestsInput
    slot?: ParkingSlotCreateNestedOneWithoutRequestsInput
    approvedBy?: UserCreateNestedOneWithoutRequestsApprovedInput
  }

  export type RequestUncheckedCreateWithoutParkingRecordInput = {
    id?: string
    userId: string
    vehicleId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCreateOrConnectWithoutParkingRecordInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutParkingRecordInput, RequestUncheckedCreateWithoutParkingRecordInput>
  }

  export type VehicleCreateWithoutParkingRecordsInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
    requests?: RequestCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutParkingRecordsInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutParkingRecordsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
  }

  export type ParkingSlotCreateWithoutParkingRecordsInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestCreateNestedManyWithoutSlotInput
    parkingSpotRecords?: ParkingRecordCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSlotUncheckedCreateWithoutParkingRecordsInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutSlotInput
    parkingSpotRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSlotCreateOrConnectWithoutParkingRecordsInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
  }

  export type ParkingSlotCreateWithoutParkingSpotRecordsInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestCreateNestedManyWithoutSlotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutSlotInput
  }

  export type ParkingSlotUncheckedCreateWithoutParkingSpotRecordsInput = {
    id?: string
    code: string
    zone: $Enums.LocationZone
    floor?: number
    type: $Enums.VehicleType
    size: $Enums.VehicleSize
    status?: $Enums.ParkingStatus
    hourlyRate?: number
    isCovered?: boolean
    hasCharger?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutSlotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutSlotInput
  }

  export type ParkingSlotCreateOrConnectWithoutParkingSpotRecordsInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutParkingSpotRecordsInput, ParkingSlotUncheckedCreateWithoutParkingSpotRecordsInput>
  }

  export type RequestUpsertWithoutParkingRecordInput = {
    update: XOR<RequestUpdateWithoutParkingRecordInput, RequestUncheckedUpdateWithoutParkingRecordInput>
    create: XOR<RequestCreateWithoutParkingRecordInput, RequestUncheckedCreateWithoutParkingRecordInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutParkingRecordInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutParkingRecordInput, RequestUncheckedUpdateWithoutParkingRecordInput>
  }

  export type RequestUpdateWithoutParkingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRequestsNestedInput
    slot?: ParkingSlotUpdateOneWithoutRequestsNestedInput
    approvedBy?: UserUpdateOneWithoutRequestsApprovedNestedInput
  }

  export type RequestUncheckedUpdateWithoutParkingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUpsertWithoutParkingRecordsInput = {
    update: XOR<VehicleUpdateWithoutParkingRecordsInput, VehicleUncheckedUpdateWithoutParkingRecordsInput>
    create: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutParkingRecordsInput, VehicleUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type VehicleUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    requests?: RequestUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ParkingSlotUpsertWithoutParkingRecordsInput = {
    update: XOR<ParkingSlotUpdateWithoutParkingRecordsInput, ParkingSlotUncheckedUpdateWithoutParkingRecordsInput>
    create: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutParkingRecordsInput, ParkingSlotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingSlotUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUpdateManyWithoutSlotNestedInput
    parkingSpotRecords?: ParkingRecordUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutSlotNestedInput
    parkingSpotRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSlotUpsertWithoutParkingSpotRecordsInput = {
    update: XOR<ParkingSlotUpdateWithoutParkingSpotRecordsInput, ParkingSlotUncheckedUpdateWithoutParkingSpotRecordsInput>
    create: XOR<ParkingSlotCreateWithoutParkingSpotRecordsInput, ParkingSlotUncheckedCreateWithoutParkingSpotRecordsInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutParkingSpotRecordsInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutParkingSpotRecordsInput, ParkingSlotUncheckedUpdateWithoutParkingSpotRecordsInput>
  }

  export type ParkingSlotUpdateWithoutParkingSpotRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUpdateManyWithoutSlotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutParkingSpotRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    zone?: EnumLocationZoneFieldUpdateOperationsInput | $Enums.LocationZone
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    status?: EnumParkingStatusFieldUpdateOperationsInput | $Enums.ParkingStatus
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    isCovered?: BoolFieldUpdateOperationsInput | boolean
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutSlotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileCreateNestedOneWithoutUserInput
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutUserInput
    requestsApproved?: RequestCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePictureId?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationToken?: string | null
    verificationExpires?: Date | string | null
    resetToken?: string | null
    resetExpires?: Date | string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: FileUncheckedCreateNestedOneWithoutUserInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    requestsApproved?: RequestUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePictureId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: FileUncheckedUpdateOneWithoutUserNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    requestsApproved?: RequestUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type VehicleCreateManyOwnerInput = {
    id?: string
    plateNumber: string
    type: $Enums.VehicleType
    brand?: string | null
    size: $Enums.VehicleSize
    made: string
    model: string
    color: string
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCreateManyUserInput = {
    id?: string
    vehicleId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCreateManyApprovedByInput = {
    id?: string
    userId: string
    vehicleId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogCreateManyUserInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type VehicleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    size?: EnumVehicleSizeFieldUpdateOperationsInput | $Enums.VehicleSize
    made?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutRequestsNestedInput
    slot?: ParkingSlotUpdateOneWithoutRequestsNestedInput
    approvedBy?: UserUpdateOneWithoutRequestsApprovedNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRequestsNestedInput
    slot?: ParkingSlotUpdateOneWithoutRequestsNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateManyVehicleInput = {
    id?: string
    userId: string
    slotId?: string | null
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateManyVehicleInput = {
    id?: string
    requestId?: string | null
    slotId: string
    checkIn?: Date | string
    parkingSpotIdPrisma?: string | null
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    slot?: ParkingSlotUpdateOneWithoutRequestsNestedInput
    approvedBy?: UserUpdateOneWithoutRequestsApprovedNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slotId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneWithoutParkingRecordNestedInput
    slot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSpot?: ParkingSlotUpdateOneWithoutParkingSpotRecordsNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    slotId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotIdPrisma?: NullableStringFieldUpdateOperationsInput | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    slotId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotIdPrisma?: NullableStringFieldUpdateOperationsInput | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateManySlotInput = {
    id?: string
    userId: string
    vehicleId: string
    status?: $Enums.RequestStatus
    startTime: Date | string
    endTime: Date | string
    durationHours: number
    approvedById?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateManySlotInput = {
    id?: string
    requestId?: string | null
    vehicleId: string
    checkIn?: Date | string
    parkingSpotIdPrisma?: string | null
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateManyParkingSpotInput = {
    id?: string
    requestId?: string | null
    vehicleId: string
    slotId: string
    checkIn?: Date | string
    checkOut?: Date | string | null
    totalHours?: number | null
    amountPaid?: number | null
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRequestsNestedInput
    approvedBy?: UserUpdateOneWithoutRequestsApprovedNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationHours?: FloatFieldUpdateOperationsInput | number
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneWithoutParkingRecordNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSpot?: ParkingSlotUpdateOneWithoutParkingSpotRecordsNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotIdPrisma?: NullableStringFieldUpdateOperationsInput | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotIdPrisma?: NullableStringFieldUpdateOperationsInput | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUpdateWithoutParkingSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneWithoutParkingRecordNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    slot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutParkingSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}