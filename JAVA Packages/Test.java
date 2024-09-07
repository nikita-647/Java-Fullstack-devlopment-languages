// import java.lang.String;
 import mypack1.Demo;
 import mypack1.Demo2;
 import mypack1.inner.Demo3;
// import mypack1.*;

class Test {

	public static void main(String[] args) {
 
		java.lang.String str;

		str = new java.lang.String("Hello World");

		java.lang.System.out.println(str);

		Demo d=new Demo();
		d.display();

		Demo2 d2 = new Demo2();
		d2.display();

		Demo2 d3 = new Demo3();
		d3.display();
		

	}

}