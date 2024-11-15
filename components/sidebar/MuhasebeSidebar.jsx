"use client"

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
const MuhasebeSidebar = () => {

    const [position, setPosition] = useState('bottom'); // Başlangıç pozisyonu
    const triggerRef = useRef(null);
    const handleToggle = () => {
        const trigger = triggerRef.current;
        if (trigger) {
            const { bottom, top } = trigger.getBoundingClientRect();
            const dropdownHeight = 220; // Dropdown yüksekliği (örneğin)

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
                                <li><span className='flex items-center py-1'> <i className="fa fa-inbox " /> Hesap Planı  </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-envelope-o" /> Hesap Çerçevesi</span></li>

                            </ul>
                            <h5>Hareketler</h5>
                            <ul className="category-list" style={{ padding: 0 }}>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Mahsup </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Tahsil</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Tediye</span></li>
                                <li>
                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    T.Muh </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-64 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>T.Muh</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>Diğer</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Personel Tahakkuk</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Sabit Kıymetler</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Satılan Malın Maliyet Kaydı</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>


                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Açılış</span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Kapanış</span></li>

                                <li>
                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    Diğer </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-64 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Diğer</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>TFRS Düzeltme Fişi</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Bakiye Kapat</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Yansıtma Fişi Oluştur</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Kapanış Fişi Oluştur</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Açılış Fişi Oluştur</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Yevmiye Fişi Sırala</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Yevmiye No Değiştir</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Fiş No Sırala</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Kur Farkı Oluştur</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Toplu Kod Değiştirme</span>
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
                                                <span className='flex items-center  '> <i className="fa fa-circle text-warning" />
                                                    Veri Aktar </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-64 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Veri Aktar</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>İçeri Veri Al</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Dışarı Veri Çık</span>
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
                                                    Enf.Muh. </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-72 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Enf.Muh.</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>Basit Ortalama Yöntemi</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Devir Hızı Yöntemi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Hareket Ortalama Düzeltme</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Düzeltme Fişi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Toplu Endeks Verme</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Enflasyon Farkı Hesaplama</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Sermaya Düzeltme</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Düzeltme İşlemleri Listesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>

                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            </ul>


                            <h5>Listeler</h5>
                            <ul className="category-list" style={{ padding: 0 }}>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Yevmiye Fiş Listesi </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Yevmiye Satır İzleme </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Muavin Defteri  </span></li>
                                <li>
                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    Mali Tablo </span> <IoMdArrowDropright />
                                            </span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-56 dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Mali Tablo</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>VUK'a Göre</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>TFRS'ye Göre</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>


                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Kar/Zarar Tablosu  </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> İçeri Alınan Kayıtları İzle  </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Dışarı Çıkılan Kayıtları İzle  </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Muavin Mizan </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Form BA Kayıtları İzleme </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" />Form BS Kayıtları İzleme </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Entegrasyon Kodları İzleme </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> E-Beyanname İzleme </span></li>


                            </ul>
                            <h5>Konsolidasyon</h5>
                            <ul className="category-list" style={{ padding: 0 }}>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Yevmiye Fişi </span></li>
                                <li><span className='flex items-center py-1'> <i className="fa fa-circle text-warning" /> Mizan</span></li>

                            </ul>

                            <h5>Beyanname</h5>
                            <ul className="category-list" style={{ padding: 0 }}>
                                <li>

                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    e-beyanname </span> <IoMdArrowDropright />
                                            </span>


                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-[30rem] dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>e-Beyanname</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>Katma Değer Vergisi Beyannamesi</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Katma Değer Vergisi Beyannamesi 2</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Dama Vergisi Vergisi Beyannamesi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Kurumlar Vergisi Mükellefleri İçin Geçici Vergi Beyannamesi </span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Gelir Vergisi Mükellefleri İçin Geçici Vergi Beyannamesi </span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Form BA</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Form BS</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Muhtasar Ve Prim hizmet Beyannamesi {'(1003A)'}</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Muhtasar Ve Prim hizmet Beyannamesi {'(1003B)'}</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>

                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuSub>
                                                    <DropdownMenuSubTrigger>
                                                        <UserPlus />
                                                        <span className='text-[13px]'>Eski Sürümler</span>
                                                    </DropdownMenuSubTrigger>
                                                    <DropdownMenuPortal>
                                                        <DropdownMenuSubContent>
                                                            <DropdownMenuItem>
                                                                <Mail />
                                                                <span className='text-[13px]'>Muhtasar Beyannamesi</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <MessageSquare />
                                                                <span className='text-[13px]'>Muhtasar Beyannamesi 30 Nolu</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem>
                                                                <PlusCircle />
                                                                <span className='text-[13px]'>Basit Ulusal Ticari Kzanç Beyannamesi</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <PlusCircle />
                                                                <span className='text-[13px]'>Kesin Mizan {'(Gelir Vergisi Mükellefleri İçin)'} </span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <PlusCircle />
                                                                <span className='text-[13px]'>Kesin Mizan {'(Kurumlar Vergisi Mükellefleri İçin)'} </span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuSubContent>
                                                    </DropdownMenuPortal>
                                                </DropdownMenuSub>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>



                                </li>

                            </ul>

                            <h5>Muhasebe</h5>
                            <ul className="category-list" style={{ padding: 0 }}>
                                <li>

                                    <DropdownMenu onOpenChange={handleToggle}>
                                        <DropdownMenuTrigger asChild ref={triggerRef}>
                                            <span className='flex items-center w-full justify-between py-1'>
                                                <span className='flex items-center '> <i className="fa fa-circle text-warning" />
                                                    Muhasebe </span> <IoMdArrowDropright />
                                            </span>


                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className={`w-[30rem] dropdown-content ${position}`} side="bottom" align="end">
                                            <DropdownMenuLabel>Muhasebe</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span className='text-[13px]'>Hesap Sınıfları</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Hesap Sınıf Kart Yetkileri</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Şablon Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuSub>
                                                    <DropdownMenuSubTrigger>
                                                        <UserPlus />
                                                        <span className='text-[13px]'>Mali Tablo Tanımları</span>
                                                    </DropdownMenuSubTrigger>
                                                    <DropdownMenuPortal>
                                                        <DropdownMenuSubContent>
                                                            <DropdownMenuItem>
                                                                <Mail />
                                                                <span className='text-[13px]'>Muhtasar Beyannamesi</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <MessageSquare />
                                                                <span className='text-[13px]'>Muhtasar Beyannamesi 30 Nolu</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <PlusCircle />
                                                                <span className='text-[13px]'>Basit Ulusal Ticari Kzanç Beyannamesi</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <PlusCircle />
                                                                <span className='text-[13px]'>Kesin Mizan {'(Gelir Vergisi Mükellefleri İçin)'} </span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <PlusCircle />
                                                                <span className='text-[13px]'>Kesin Mizan {'(Kurumlar Vergisi Mükellefleri İçin)'} </span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuSubContent>
                                                    </DropdownMenuPortal>
                                                </DropdownMenuSub>

                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Onay Defter Tarihleri</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>KDV Ayırma Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Hesap Kartı Değiştirme</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Fiyat Endeksi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Ticari Kredi Oranları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>

                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Enflasyon Muhasebesi Dönemleri</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>

                                                </DropdownMenuItem>


                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Yevmiye Fiş Kontrol</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>

                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Veri Transfer Şablonları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>

                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>E-Beyanname Tanım</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>

                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Fiş Kasa Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>

                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Yevmiye Fiş Not Etiketi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Yevmiye Fiş Not Şablonu</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>BA/BS Formu Hesap Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>BA/BS Formu Kontrol Dışı Hesaplar</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>KDV Grubu Entegrasyon Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>E-Defter Onay Tarihi</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span className='text-[13px]'>Dönemsel Hesap Planı Tanımları</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>



                                                <DropdownMenuSeparator />

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

export default MuhasebeSidebar