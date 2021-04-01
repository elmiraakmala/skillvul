#include <iostream>
#include <string>
using namespace std;

// Mendeklarasikan tipe data baru dengan class nilai
class khs
{
public:    //aksesnya public agar dapat diakses di luar class

    //atribut-atribut 
    string nama;
    int nim;
    float ipk;
};

int main()
{
    //Buat objek untuk kelas nilai
    khs data;
    
    cout << "Nama mahasiswa";
    cin >> data.nama;

    cout << endl;
    cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;
    cout << "            Kartu hasil studi [KHS]" << endl;
    cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;

    cout << "Nama mahasiswa : " << data.nama << endl; 

    cin.get();


}
