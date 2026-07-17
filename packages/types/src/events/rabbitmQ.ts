export interface QueueMessage<T = unknown> {

    event: string;

    data: T;

    timestamp: string;

}