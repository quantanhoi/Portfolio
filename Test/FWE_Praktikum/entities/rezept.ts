import { Entity, PrimaryKey, Property, OneToMany, OneToOne, Collection, ManyToMany } from '@mikro-orm/core';
import { Bild } from './bild';
import { Ingredient_Amount } from './ingredient_amount'
import { RezeptStep } from './rezeptstep';
import { Kategorie } from './kategorie';

@Entity({tableName : 'Rezept'})
export class Rezept {
    @PrimaryKey()
    R_ID!: number;

    @Property()
    Name!: string;

    @Property()
    Beschreibung!: string;

    @Property()
    Rating!: number;

    @OneToOne(() => Bild)
    B_ID!: Bild;

    @OneToMany(() => Ingredient_Amount, ingredientAmount => ingredientAmount.rezept)
    ingredientAmounts = new Collection<Ingredient_Amount>(this);

    @OneToMany(() => RezeptStep, rezeptStep => rezeptStep.rezept)
    rezeptSteps = new Collection<RezeptStep>(this);

    @ManyToMany(() => Kategorie, kategorie => kategorie.rezepte)
    kategorien = new Collection<Kategorie>(this);
}