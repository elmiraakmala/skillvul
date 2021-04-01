#include <iostream>
#include <string>
using namespace std;


class khs
{
public:    //aksesnya public agar dapat diakses di luar class

    //atribut-atribut 

    string nim;
    string nama;
    float ipk;
};

int main()
{
    //Buat objek untuk kelas nilai
    khs data;

    cout << "Nama mahasiswa : "; cin >> data.nama;
    cout << "Nomor Induk Mahasiswa : "; cin >> data.nim;

    cout << endl;
    cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;
    cout << "            Kartu hasil studi [KHS]" << endl;
    cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;

    cout << "Nama mahasiswa : " << data.nama << endl;
    cout << "Nomor Induk Mahasiswa : " << data.nim << endl;
    cin.get();


}
