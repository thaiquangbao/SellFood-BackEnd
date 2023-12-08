import { AppService } from "./app.service";
import { Response } from "express";
import { FoodService } from "./food/food.service";
import { SlideDTO, UpdateSlideDTO } from "./trangchu.entity/dto/slideDTO";
import { MemoryDTO, UpdateMemoryDTO } from "./trangchu.entity/dto/memoryDTO";
import { MemoryService } from "./memory.service";
import { InfoResDTO, UpdateInfoResDTO } from "./trangchu.entity/dto/infoResDTO";
export declare class AppController {
    private readonly foodService;
    private readonly appService;
    private readonly memoryService;
    constructor(foodService: FoodService, appService: AppService, memoryService: MemoryService);
    getAllFood(res: Response): Promise<void>;
    getListSlide(res: Response): Promise<void>;
    insert(slide: SlideDTO): Promise<import("./trangchu.entity/slide").Slide>;
    findOne(id: string, res: Response): Promise<void>;
    update(id: string, slide: UpdateSlideDTO, res: Response): Promise<void>;
    getListMemory(res: Response): Promise<void>;
    insertMem(memory: MemoryDTO): Promise<import("./trangchu.entity/kyNiemKH").Memory>;
    findOneMem(id: string, res: Response): Promise<void>;
    updateMem(id: string, memory: UpdateMemoryDTO, res: Response): Promise<void>;
    getListInformation(res: Response): Promise<void>;
    insertInformation(information: InfoResDTO): Promise<import("./trangchu.entity/infoRes").Information>;
    findOneInfoResDTO(id: string, res: Response): Promise<void>;
    updateInfoResDTO(id: string, information: UpdateInfoResDTO, res: Response): Promise<void>;
}
