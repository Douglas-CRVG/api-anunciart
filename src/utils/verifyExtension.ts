import { wrongSchemaError } from "./errorUtils.js";

export default function verifyExtension(extension: string) {
    const MP4 = extension === 'mp4';
    const MOV = extension === 'mov';
    const WMV = extension === 'wmv';
    const AVI = extension === 'avi';
    const FLV = extension === 'flv';

    if (!(MP4 || MOV || WMV || AVI || FLV)) {
        throw wrongSchemaError("wrong extension")
    }
}