import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Brief: { nfc: string };
    Main:undefined;
    Scan:undefined;
    Call:undefined;
    Detail:{ data: ProductType };
    DoorImage:{data:DoorImageType};
};
type ColorRgb={
    red:number;
    green:number;
    blue:number;
}
export type DoorImageType={
    imageUrl:string|null,
    color_code:string|null,
    colorRgb:ColorRgb,
    left:string|null,
    right:string|null,
    width:number,
    height:number
}
export type BriefProps = NativeStackScreenProps<RootStackParamList, 'Brief'>;
export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;
export type ScanProps = NativeStackScreenProps<RootStackParamList, 'Scan'>;
export type CallProps = NativeStackScreenProps<RootStackParamList, 'Call'>;
export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;
export type DoorImageProps = NativeStackScreenProps<RootStackParamList, 'DoorImage'>;

export interface ProductType {
    item_image_item_code: string;
    item_image_design: string;
    item_image_left_swing: string;
    item_image_right_swing: string;
    item_image_description: string;
    id: string;
    user_id: string;
    reference_number: string;
    order_number: string;
    job_number: string;
    part_number: string;
    door_size: string;
    open_direction: string;
    lockset: string;
    accessories: string;
    image: string;
    manufacturer_address: string;
    height: number;
    width: number;
    modal: string;
    handle_position: string;
    backset: string;
    inside_color_finish: string;
    outside_color_finish: string;
    color_code: string;
    frame: string;
    viewed_from_outside: string;
    lock_type: string;
    handle_type: string;
    hinge_type: string;
    glass_type: string;
    glass_size: string;
    lock_height: string;
    r_value: string;
    manufacturer_phone: string;
    manufacturer_email: string;
    manufacturer: string;
    brand: string;
    year_manufactured: string;
    date_manufactured: string;
    warrenty_period_end: string | null;
    nfc_tag_number: string;
}