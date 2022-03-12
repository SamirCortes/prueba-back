import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Proyecto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        length: 100,
        nullable: false
    })
    name: string;

    @Column({
        length: 250,
        nullable: false
    })
    descripcion: string;

    @Column({
        length: 250,
        nullable: false
    })
    imagen: string;

    @Column({
        length: 250,
        nullable: false
    })
    logo: string;

    @Column({
        length: 250,
        nullable: false
    })
    tags: string;

    @Column({
        length: 250,
        nullable: false
    })
    enlace: string;

    @Column({
        length: 50,
        nullable: false
    })
    fondo: string;

    @Column({
        length: 50,
        nullable: false
    })
    texto: string;

}