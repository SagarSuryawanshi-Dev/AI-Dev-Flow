    import { AsyncLocalStorage } from "node:async_hooks";

export interface RequestContext {
  requestId: string;
  serviceName: string;
  userId?: string;
}

const storage = new AsyncLocalStorage<RequestContext>();

export class RequestContextManager {
  /**
   * Create a new async context
   */
  static run(
    context: RequestContext,
    callback: () => void
  ) {
    storage.run(context, callback);
  }

  /**
   * Get current request context
   */
  static getContext(): RequestContext | undefined {
    return storage.getStore();
  }

  /**
   * Get current request ID
   */
  static getRequestId(): string | undefined {
    return storage.getStore()?.requestId;
  }

  /**
   * Get current user ID
   */
  static getUserId(): string | undefined {
    return storage.getStore()?.userId;
  }
}