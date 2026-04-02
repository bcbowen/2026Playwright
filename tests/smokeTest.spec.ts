import { test, expect } from '@playwright/test'; 
import { RequestHandler } from '../utils/RequestHandler';

test('first test', async() => {
    const api = new RequestHandler();
    api.url("https://conduit-api.bondaracademy.com/api'");
}); 
