import { IsNumber, IsOptional, IsPositive, Min, } from "class-validator";

export class PaginationDto{

    @IsOptional()
    @IsPositive()
    @Min(1)
    @IsNumber()
    limit?:number;

    @IsOptional()
    @IsPositive()
    offset?: number;
}