import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("despesas")
export class Despesa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  descricao!: string;

  @Column("date")
  data!: Date;

  @Column("date")
  data_efetivacao!: Date;

  @Column("decimal")
  valor!: number;

  @Column("decimal")
  valor_pago!: number;

  @Column("boolean")
  pago!: boolean;
}
