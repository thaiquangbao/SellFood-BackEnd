import { Memory } from "./trangchu.entity/kyNiemKH";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
@Injectable()
export class MemoryService {
  constructor(
    @InjectModel(Memory.name)
    private memoryEntity: mongoose.Model<Memory>,
  ) {}
  // Memory
  async findAllMemory(): Promise<Memory[]> {
    const memories = await this.memoryEntity.find();
    return memories;
  }
  async insertMemory(memory: Memory): Promise<Memory> {
    const newmemory = await this.memoryEntity.create(memory);
    return newmemory;
  }
  async findOneMemory(id: string): Promise<Memory> {
    const memory = await this.memoryEntity.findById(id);
    return memory;
  }
  async updateMemory(id: string, memory: Memory): Promise<Memory> {
    const result = await this.memoryEntity.findByIdAndUpdate(id, memory, {
      new: true,
      runValidators: true,
    });
    return result;
  }
}
