import { PaymentMethodEntity } from "./../../payment-methods/entities/payment-method.entity";
import { BaseEntity } from "./../../common/config/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CustomerEntity } from "./../../customers/entities/customer.entity";

@Entity('purchase')
export class PurchaseEntity extends BaseEntity{
    @Column({type: 'varchar'})
    status: string;

    @ManyToOne(()=> PaymentMethodEntity, (paymentMethod)=>paymentMethod.purchases)
    @JoinColumn({name:'payment_method_id'})
    paymentMethod: string;

    @ManyToOne(()=> CustomerEntity, (customer)=>customer.purchases)
    @JoinColumn({name:'customer_id'})
    customer: string;
}
