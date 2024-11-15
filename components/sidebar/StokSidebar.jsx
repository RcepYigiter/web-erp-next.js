import React, { useRef, useState } from 'react'
import {
    CreditCard,
    Mail,
    MessageSquare,
    PlusCircle,
    User,
    UserPlus,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link';
const StokSidebar = () => {
    const [position, setPosition] = useState('bottom'); // Başlangıç pozisyonu
    const triggerRef = useRef(null);
    const handleToggle = () => {
        const trigger = triggerRef.current;
        if (trigger) {
            const { bottom, top } = trigger.getBoundingClientRect();
            const dropdownHeight = 300; // Dropdown yüksekliği (örneğin)

            // Eğer alan yoksa yukarıda açılacak şekilde ayarlayın

            if (window.innerHeight - bottom < dropdownHeight) {

                setPosition('top');
            } else {

                setPosition('bottom');
            }
        }
    };
    return (
        <div id='sidebar-menu' className='border max-h-[1000px] h-[calc(100vh-77px)] overflow-auto w-72 min-w-[250px]'>
            <div className=" min-w-56 ">
                <div className="ibox ">
                    <div className="ibox-content mailbox-content">
                        <div className="file-manager">

                            <div className="space-25" />
                            <h5>Kartlar</h5>
                            <ul className="folder-list m-b-md" style={{ padding: 0 }}>
                                <li>
                                    <Link href={'/stok/stok-karti'} className='flex items-center py-1'> <i className="fa fa-inbox " />Stok </Link >
                                </li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-envelope-o" /> Hizmet</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-envelope-o" /> Depo</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-envelope-o" /> Masraf</span></li>

                            </ul>
                            <h5>Hareketler</h5>
                            <ul className="category-list" style={{ padding: 0 }}>

                                <li>
                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    Giriş </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-64 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Giriş</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>Satın Alınan Mal Girişi</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Konsiye Giriş</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Konsiye Çıkıştan İade Alımı</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Teşvikli İthalat</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Teşviksiz İthalat</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Fason Giriş</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Parakende Satış İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Toptan Satış İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Teşvikli İhracat İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Teşviksiz ihracat İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Fason Çıkış İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Devir Girişi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>İmalattan Giriş</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Sayım Farkı Girişi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Diğer Girişler</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>



                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li>
                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    Çıkış </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-80 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Çıkış</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>Parakende Satış</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Toptan Satış</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Alım İade</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Konsiye Giriş İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Teşvikli / Teşviksiz İthalat İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Fason Giriş İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Diğer Giriş İadesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Teşvikli / Teşviksiz İhracat </span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Konsiye Çıkış</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Fason Çıkış</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Üretime Çıkış</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Mamül/Yarı Mamül, Hurda, Fire Çıkışı</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Hammadde, Hurda , Fire Çıkışı</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Dahili Kullanım</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Sayım Farkı Çıkış</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Diğer Çıkışlar</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>



                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Depo Transferi</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Sayım Sonucu</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> El Term. Bilgi Alma</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Stok Devir</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Barkod Oluştur</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Barkod Döküm</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Maliyet Düzenle</span></li>
                            </ul>


                            <h5>Listeler</h5>
                            <ul className="category-list" style={{ padding: 0 }}>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Stok Hareket Listesi </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Stok Bazında Hareket Listesi </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Tüm Stoklar İçin Hareket  </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Depo Hareket Listesi </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Mal Bazında Depo Hareket  </span></li>

                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Stok Listesi  </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Hizme Listesi</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Stok Etiket </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Stok Toplam Listesi </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Stok Karlılık Listesi</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Gkap Beyannamesi Ürün Listesi </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Dönemsel Satış Toplamları </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Dönemsel Alış Toplamları </span></li>


                            </ul>


                            <h5>Tanımlar</h5>
                            <ul className="category-list" style={{ padding: 0 }}>
                                <li>
                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    Stok </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-80 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Stok</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>Stok Kartı Toplu Değiştirme</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Hizmet Kartı Toplu Değiştirme</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Dinamik Ürün </span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Ağırlıklı Ürün Barkod Formatı Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Karekod Format Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Stok Hareket Kontrol</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Stok Kartı Birim Değiştirme</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Stok Sınıfları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Stok Kartı Kullanım Yetkileri</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Hizmet Sınıfları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Hizmet Sınıf Kartı Yetkileri</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Depo sınıfları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Depo Sınıf Kartı Yetkileri</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Birim Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                               



                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            </ul>



                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StokSidebar