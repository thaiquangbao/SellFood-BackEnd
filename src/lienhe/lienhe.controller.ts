import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { ReplyDTO } from "./entity/lienhe.dto";
import { LienheService } from "./lienhe.service";
import { Category } from "src/food/entity/food.entity";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
// import moment from "moment";
const PRIVATE_KEY: string =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0Tc+cxdGdNgRO\nU0waAvz+sTLK96yxv8/USgyihSbJmJ63HjxNuNSwco9Pb9WDpNsbn0+pdqVEmWMS\n9fV18OPVgQBtAvR0VRbphaNyJNIelvUNVqZXxSux6tnI3/m0keqe121mnW6I8lkX\nHbkuAEsCPGmF7/spsVABSQoVMIU/NskcTAOWLRKFMdEZ6tJHwEqPD9iBfB3aWgKu\n0CJsSt+UmsbtUULHkwxQMrEiTWaXbpHj4UB+BuNWzTW4kxYsF4V3SCKpTh0dZ83T\nUocYJY3Vac6UDWHZy6kwwlcMjP4Ezgj0uxzG6P7ypPr9t0jkJK07ptGEH51gOB4O\nBcZ3a3RrAgMBAAECggEALtgkf4O5wRGersbfd8ac+oMJQkh0+r1t/qa6f6L+f9QC\nMGtPmZXS1ID/ENFqdMhpENUkOlAUAi2j2vJCMsFCQF9CwA/LeUn+KO/KlkZQvRfV\nVQDVOOqGPrRYnuLqGmrqvRgVWVq/tB7a3LGhQf1bf5o4hE7kP2HM+niCgRzZEaH3\njxZRhuW5pwQhyABQoQN3OmbHLZcmIupbRzNgTWQGV26usfuPzp9AunoKxXakSZV7\neFDxJQWb1Kz5mlRXhYq/n1OraIwynw5rGuamm4ul7IlboURvC+2wqFjomDvnVJn0\nkMhjIMWCB0sTYSQ2ItH/AvNUwEQHCL+ohlbzz0s0sQKBgQDdpsQRW9Z3rb6PAaNB\n7JjzxlmhU26b6t4z+gJy3rvj9NqAPTLbudIYEYMB0FcShtRiKrW1UiHm1YNshoWe\nny2YpEQJFQzghOBWVFcHzuJX2zKGOlIx0yT+lvkYn2azQZ5i7e7sQsyfU0oLIO8Z\nWIJ1N0FnFvBg7K0VuzmbhShjiQKBgQDQPrsCu6Zqx123VdigaJA78trJby3hxGqH\nhb/Q45GK+bCT5b6aYVjcpOHaTCcLm6n46LB5xs2fz3FajH0WsnOz7lCpbiHTf2uT\nFJGZNBbpLRcHuI4+UZqsvDFNNB1Snj2wTKK5d4wOXJGEy5pqSVe1SgSQqpsIPQQW\n+4cMxHr3UwKBgQCcbm8gRS2W53N+4EwFYeMM4Scu2YBN4DQUgNUrlxEKMCvpp8d2\nFa42OF26cPyS4b+QzM3Te3TbwkLv2/z/1x3KBdzSgB3Hc2AU7Y9Cvns2QEhnPU/3\nRCpu18RT4WQNDTmoXn5qFjbuF01Bj2vP+oyQB4BMLn9WGJOLq8hbf13i6QKBgB27\nZx37xsXmExZS9mvoofc9NEmgSw+56G/TA9ECPMx32+Mx4SXPkk1maSyuxMBeiEUW\ni+PHI6KWjpucBVwRPH3LH88g/0lgHu7P9/3EtySxoGEk04JISmoxMGTSdQFPwIUE\nXBNY4zFFvC0WmMRmFlS27bHt+daSR5w0a1LCVsArAoGAVx/ptFjvi1MqPrWIei3C\nDGdMrLPd+hyYzJrC4ccqZ8B5OXRT++TVXCNkZsbwC/RXBaH0ycucE8Lx2Qu0j0cM\nAHmEnm0P3jjR239xnuesiY7XZZAsYeCwAIDx74dg7it0ozB0AWlTDVc2CELCP4cb\nTLnO8vGczEneIwdEzrEvjZE=\n-----END PRIVATE KEY-----\n";
@Controller("lien-he")
export class LienheController {
  constructor(
    private appService: AppService,
    private footerService: FooterService,
    private lienheService: LienheService,
  ) {}
  @Get()
  async lienhePage(@Res() res: Response) {
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    res.render("lienhe/lien-he", { slideOne, footers, Category });
  }
  @Post("up-reply")
  async upReply(@Res() res: Response, @Body() reply: ReplyDTO) {
    const result = writeDataGoogleSheet(reply);
    if (result) {
      res.json({ code: 200 });
    } else {
      res.json({ code: 500 });
    }
  }
}
// Google sheet
const writeDataGoogleSheet = async (data) => {
  const serviceAccountAuth = new JWT({
    email: process.env.CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const doc = new GoogleSpreadsheet(process.env.SHEET_ID, serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`

  await sheet.addRow({
    "Họ tên": data.hoTen,
    "Số điện thoại": data.sdt,
    "Địa chỉ": data.address,
    Email: data.email,
    "Tiêu đề": data.title,
    "Nội dung": data.noiDung,
  });
};
