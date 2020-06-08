import { component, register } from "riot";
import { Route, Router } from "@riotjs/route";

import ZApp from "../riot/z-app.riot";
import ZMenubar from "../riot/z-menubar.riot";
import ZTitlebar from "../riot/z-titlebar.riot";
import ZPanelHeader from "../riot/z-panel-header.riot";
import ZTextField from "../riot/z-text-field.riot";
import ZSelectField from "../riot/z-select-field.riot";
import ZMultielectField from "../riot/z-multiselect-field.riot";
import ZDateField from "../riot/z-date-field.riot";
import ZPageFooter from "../riot/z-page-footer.riot";
import ZDaftarKaryawan from "../riot/z-daftar-karyawan.riot";
import ZTambahKaryawan from "../riot/z-tambah-karyawan.riot";
import ZDaftarPenjualan from "../riot/z-daftar-penjualan.riot";

register("router", Router);
register("route", Route);

register("z-menubar", ZMenubar);
register("z-titlebar", ZTitlebar);
register("z-panel-header", ZPanelHeader);
register("z-text-field", ZTextField);
register("z-select-field", ZSelectField);
register("z-multiselect-field", ZMultielectField);
register("z-date-field", ZDateField);
register("z-page-footer", ZPageFooter);
register("z-daftar-karyawan", ZDaftarKaryawan);
register("z-tambah-karyawan", ZTambahKaryawan);
register("z-daftar-penjualan", ZDaftarPenjualan);

component(ZApp)(window.app);
