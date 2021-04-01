#include <iostream>
#include <string>
using namespace std;

// Mendeklarasikan tipe data baru dengan class nilai
class nilai
{
public:    //aksesnya public agar dapat diakses di luar class

    //atribut-atribut 
    string text;
    char nl;
};

int main()
{
    //Buat objek untuk kelas nilai
    nilai obj;
    char nilai1[5] = { 'A','B','C','D','E' };
    string text1[5] = {"Sangat baik","Baik","Cukup","Kurang","Gagal"};
    for (int i = 0; i < 5; i++) 
    {
       obj.nl = nilai1[i];
       obj.text = text1[i];
       cout << "Nilai " << obj.nl << " = " << obj.text << endl;
    }
    return 0;
}
