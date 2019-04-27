/// <reference types="mongoose" />
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<typeof import("mongoose")>;
}[];
