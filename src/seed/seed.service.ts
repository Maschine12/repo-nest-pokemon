import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) { }

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); // Eliminar todos los registros de la colección Pokemon
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    // const insertPromisesArray: Promise<any>[] = [];  //espeficicar el tipo de promesa que se va a insertar si no da error ¡¡¡

    const pokemonToInsert: { name: string, nro: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const nro = +segments[segments.length - 2];

      pokemonToInsert.push({ name, nro }); // Almacenar el nombre y el número en un array
      // insertPromisesArray.push(
      //   this.pokemonModel.create({ name, nro })
      // );
    });
    await this.pokemonModel.insertMany(pokemonToInsert); // Insertar todos los registros de una sola vez
    return 'seed executed';
  }
}
