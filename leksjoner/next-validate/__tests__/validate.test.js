import { validate } from "../lib/validate/index";

// for alle typer email-kombinasjoner
// https://gist.github.com/cjaoude/fd9910626629b53c4d25

import httpMocks from "node-mocks-http";

import { createUser } from "../features/users/users.controller";
import prisma from "@/lib/clients/db";

const url = "http://localhost:3000/api/users";

const wrongEmails = [
  "email@example..com",
  "@example.com",
  "email.example.com",
  "email..email@example.com",
];

const correctEmails = [
  "email@example.com",
  "firstname.lastname@example.com",
  "1234567890@example.com",
];

describe("Validation", () => {
  describe("When validating email", () => {
    it("should return false when wrong email is provided", () => {
      const emails = wrongEmails.filter((email) => validate.isEmail(email));

      expect(emails.length).toBe(0);
    });

    it("should return true when wrong email is provided", () => {
      const emails = correctEmails.filter((email) => validate.isEmail(email));

      expect(emails.length).toBe(correctEmails.length);
    });
  });
  describe("When validating min-length", () => {
    it("should return false when length is not provided", () => {
      const hasMinLength = validate.minLength(null, "test");

      expect(hasMinLength).toBeFalsy();
    });

    it("should return false when value is not provided", () => {
      const hasMinLength = validate.minLength(2);

      expect(hasMinLength).toBeFalsy();
    });

    it("should return false when value is to short", () => {
      const hasMinLength = validate.minLength(5, "test");

      expect(hasMinLength).toBeFalsy();
    });

    it("should return true when value has minimum length", () => {
      const hasMinLength = validate.minLength(2, "te");

      expect(hasMinLength).toBeTruthy();
    });
  });
});

describe("User registration", () => {
  beforeEach(async () => {
    // tømmer hele databasen
    await prisma.feed.deleteMany({});
    await prisma.feedFollow.deleteMany({});
    await prisma.user.deleteMany({});
  });

  describe("Creating user", () => {
    describe("when passed user email and nickname", () => {
      it("should respond with status 201 Created", async () => {
        const request = httpMocks.createRequest({
          method: "POST",
          url,
          body: {
            email: "test@test.no",
            nickname: "Nickname",
          },
        });

        const response = httpMocks.createResponse();

        const result = await createUser(request, response);

        expect(result.statusCode).toBe(201);
      });
      it("should respond with correct data", async () => {
        const request = httpMocks.createRequest({
          method: "POST",
          url,
          body: {
            email: "test@test.no",
            nickname: "Nickname",
          },
        });

        const response = httpMocks.createResponse();

        const result = await createUser(request, response);

        const resultAsJson = result._getJSONData();

        expect(resultAsJson.success).toBe(true);
        expect(resultAsJson.data.email).toBe("test@test.no");
        expect(resultAsJson.data.nickname).toBe("Nickname");
      });
      it("should have added user to database", async () => {
        const userOne = httpMocks.createRequest({
          method: "POST",
          url,
          body: {
            email: "test@test.no",
            nickname: "Nickname",
          },
        });

        const userTwo = httpMocks.createRequest({
          method: "POST",
          url,
          body: {
            email: "test2@test.no",
            nickname: "Test",
          },
        });

        const responseOne = httpMocks.createResponse();
        const responseTwo = httpMocks.createResponse();

        await createUser(userOne, responseOne);
        await createUser(userTwo, responseTwo);
        const users = await prisma.user.findMany({});

        expect(users.length).toBe(2);
      });
    });
    describe("when no user email is provided", () => {
      it("should respond with status 400 Bad Request", async () => {
        const request = httpMocks.createRequest({
          method: "POST",
          url,
          body: {},
        });

        const response = httpMocks.createResponse();

        await createUser(request, response);

        expect(response.statusCode).toBe(400);
      });
      it("should respond with status false and error message", async () => {
        const request = httpMocks.createRequest({
          method: "POST",
          url,
          body: {},
        });

        const response = httpMocks.createResponse();

        const result = await createUser(request, response);
        const resultAsJson = result._getJSONData();

        expect(resultAsJson.success).toBe(false);
        expect(resultAsJson.error).toBe(
          "Missing required field: email or nickname"
        );
      });
    });
    describe("when same email is provided", () => {
      it("should respond with status 500", async () => {
        const userOne = httpMocks.createRequest({
          method: "POST",
          url,
          body: {
            email: "test@test.no",
            nickname: "Nickname",
          },
        });

        const userTwo = httpMocks.createRequest({
          method: "POST",
          url,
          body: {
            email: "test@test.no",
            nickname: "Nickname 2",
          },
        });

        const responseOne = httpMocks.createResponse();
        const responseTwo = httpMocks.createResponse();

        const resultOne = await createUser(userOne, responseOne);
        const resultAsJsonOne = resultOne._getJSONData();

        const resultTwo = await createUser(userTwo, responseTwo);
        const resultAsJsonTwo = resultTwo._getJSONData();

        const users = await prisma.user.findMany({});

        expect(resultAsJsonOne.success).toBe(true);
        expect(resultAsJsonTwo.success).toBe(false);
        expect(resultOne.statusCode).toBe(201);
        expect(resultTwo.statusCode).toBe(500);
        expect(users.length).toBe(1);
      });
    });
  });
});
