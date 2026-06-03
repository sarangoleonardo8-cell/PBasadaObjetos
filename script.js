const activities = [
    {
        id: 1,
        title: "Java BigDecimal",
        problem: "Usar BigDecimal para ordenar números decimales de forma descendente preservando el formato original.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.math.BigDecimal;
import java.util.*;

class Solution {
    public static void main(String[] args) {
        // Input
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] s = new String[n + 2];
        for (int i = 0; i < n; i++) {
            s[i] = sc.next();
        }
        sc.close();

        // Sort in descending order
        Arrays.sort(s, 0, n, new Comparator<String>() {
            public int compare(String a, String b) {
                BigDecimal bd1 = new BigDecimal(a);
                BigDecimal bd2 = new BigDecimal(b);
                return bd2.compareTo(bd1);
            }
        });

        // Output
        for (int i = 0; i < n; i++) {
            System.out.println(s[i]);
        }
    }
}`,
        console: [
            { type: "input", text: "> 9" },
            { type: "input", text: "> -100" },
            { type: "input", text: "> 50" },
            { type: "input", text: "> 0" },
            { type: "input", text: "> 56.6" },
            { type: "input", text: "> 90" },
            { type: "input", text: "> 0.12" },
            { type: "input", text: "> .12" },
            { type: "input", text: "> 02.34" },
            { type: "input", text: "> 000.000" },
            { type: "output", text: "90" },
            { type: "output", text: "56.6" },
            { type: "output", text: "50" },
            { type: "output", text: "02.34" },
            { type: "output", text: "0.12" },
            { type: "output", text: ".12" },
            { type: "output", text: "0" },
            { type: "output", text: "000.000" },
            { type: "output", text: "-100" }
        ],
        concepts: ["BigDecimal", "Comparator", "Arrays.sort", "Ordenamiento personalizado"]
    },
    {
        id: 2,
        title: "Java Primality Test",
        problem: "Determinar si un número grande es primo usando BigInteger.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.io.*;
import java.math.BigInteger;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        String n = bufferedReader.readLine();
        BigInteger number = new BigInteger(n);

        if (number.isProbablePrime(100)) {
            System.out.println("prime");
        } else {
            System.out.println("not prime");
        }

        bufferedReader.close();
    }
}
`,
        console: [
            { type: "input", text: "> 13" },
            { type: "output", text: "prime" },
            { type: "output", text: "prime" }
        ],
        concepts: ["BigInteger", "isProbablePrime", "Números primos", "Aritmética de precisión"]
    },
    {
        id: 3,
        title: "Java BigInteger",
        problem: "Realizar operaciones matemáticas con números muy grandes usando BigInteger.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.math.BigInteger;
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BigInteger a = new BigInteger(sc.nextLine());
        BigInteger b = new BigInteger(sc.nextLine());

        System.out.println(a.add(b));
        System.out.println(a.multiply(b));

        sc.close();
    }
}
`,
        console: [
            { type: "input", text: "> 1234" },
            { type: "input", text: "> 20" },
            { type: "output", text: "1254" },
            { type: "output", text: "24680" }
        ],
        concepts: ["BigInteger", "add", "multiply", "Aritmética de precisión"]
    },
    {
        id: 4,
        title: "Java Inheritance I",
        problem: "Usar herencia para extender la funcionalidad de una clase base.",
        code: `/**
 * @author Jefferson Sarango
 */
class Animal {
    void walk() {
        System.out.println("I am walking");
    }
}

class Bird extends Animal {
    void fly() {
        System.out.println("I am flying");
    }

    void sing() {
        System.out.println("I am singing");
    }
}

public class Solution {
    public static void main(String[] args) {
        Bird bird = new Bird();
        bird.walk();
        bird.fly();
        bird.sing();
    }
}`,
        console: [
            { type: "output", text: "I am walking" },
            { type: "output", text: "I am flying" },
            { type: "output", text: "I am singing" }
        ],
        concepts: ["Herencia", "extends", "Clase base", "Subclase"]
    },
    {
        id: 5,
        title: "Java Inheritance II",
        problem: "Usar herencia y reflexión para obtener información de la superclase.",
        code: `/**
 * @author Jefferson Sarango
 */
class Arithmetic {
    public int add(int a, int b) {
        return a + b;
    }
}

class Adder extends Arithmetic {
}

public class Solution {
    public static void main(String[] args) {
        Adder a = new Adder();
        System.out.println("My superclass is: " + a.getClass().getSuperclass().getName());
        System.out.print(a.add(10, 32) + " " + a.add(10, 3) + " " + a.add(10, 10) + "\n");
    }
}`,
        console: [
            { type: "output", text: "My superclass is: Arithmetic" },
            { type: "output", text: "42 13 20" }
        ],
        concepts: ["Herencia", "getClass", "getSuperclass", "Reflexión"]
    },
    {
        id: 6,
        title: "Java Abstract Class",
        problem: "Implementar una clase abstracta y una subclase concreta.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.util.Scanner;

abstract class Book {
    String title;
    abstract void setTitle(String s);
    String getTitle() {
        return title;
    }
}

class MyBook extends Book {
    void setTitle(String s) {
        title = s;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String title = sc.nextLine();
        MyBook new_novel = new MyBook();
        new_novel.setTitle(title);
        System.out.println("The title is: " + new_novel.getTitle());
        sc.close();
    }
}`,
        console: [
            { type: "input", text: "> A tale of two cities" },
            { type: "output", text: "The title is: A tale of two cities" }
        ],
        concepts: ["Clase abstracta", "abstract", "@Override", "Implementación"]
    },
    {
        id: 7,
        title: "Java Interface",
        problem: "Implementar una interfaz y usar reflexión para mostrar interfaces implementadas.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.util.Scanner;

interface AdvancedArithmetic {
    int divisor_sum(int n);
}

class MyCalculator implements AdvancedArithmetic {
    public int divisor_sum(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }
        return sum;
    }
}

class Solution {
    public static void main(String[] args) {
        MyCalculator my_calculator = new MyCalculator();
        System.out.print("I implemented: ");
        ImplementedInterfaceNames(my_calculator);
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print(my_calculator.divisor_sum(n) + "\n");
        sc.close();
    }

    static void ImplementedInterfaceNames(Object o) {
        Class[] theInterfaces = o.getClass().getInterfaces();
        for (int i = 0; i < theInterfaces.length; i++) {
            String interfaceName = theInterfaces[i].getName();
            System.out.println(interfaceName);
        }
    }
}
`,
        console: [
            { type: "input", text: "> 6" },
            { type: "output", text: "I implemented: AdvancedArithmetic" },
            { type: "output", text: "12" }
        ],
        concepts: ["Interface", "implements", "Reflexión", "Divisores"]
    },
    {
        id: 8,
        title: "Java Method Overriding",
        problem: "Sobrescribir métodos de una superclase en una subclase.",
        code: `/**
 * @author Jefferson Sarango
 */
class Sports {
    String getName() {
        return "Generic Sports";
    }

    void getNumberOfTeamMembers() {
        System.out.println("Each team has n players in " + getName());
    }
}

class Soccer extends Sports {
    @Override
    String getName() {
        return "Soccer Class";
    }

    @Override
    void getNumberOfTeamMembers() {
        System.out.println("Each team has 11 players in " + getName());
    }
}

public class Solution {
    public static void main(String[] args) {
        Sports c1 = new Sports();
        Soccer c2 = new Soccer();
        System.out.println(c1.getName());
        c1.getNumberOfTeamMembers();
        System.out.println(c2.getName());
        c2.getNumberOfTeamMembers();
    }
}`,
        console: [
            { type: "output", text: "Generic Sports" },
            { type: "output", text: "Each team has n players in Generic Sports" },
            { type: "output", text: "Soccer Class" },
            { type: "output", text: "Each team has 11 players in Soccer Class" }
        ],
        concepts: ["Method Overriding", "@Override", "Polimorfismo", "Herencia"]
    },
    {
        id: 9,
        title: "Java Method Overriding 2 (Super Keyword)",
        problem: "Usar la palabra clave super para llamar métodos de la superclase.",
        code: `/**
 * @author Jefferson Sarango
 */
class BiCycle {
    String define_me() {
        return "a vehicle with pedals.";
    }
}

class MotorCycle extends BiCycle {
    String define_me() {
        return "a cycle with an engine.";
    }

    MotorCycle() {
        System.out.println("Hello I am a motorcycle, I am " + define_me());
        String temp = super.define_me();
        System.out.println("My ancestor is a cycle who is " + temp);
    }
}

class Solution {
    public static void main(String[] args) {
        MotorCycle M = new MotorCycle();
    }
}`,
        console: [
            { type: "output", text: "Hello I am a motorcycle, I am a cycle with an engine." },
            { type: "output", text: "My ancestor is a cycle who is a vehicle with pedals." }
        ],
        concepts: ["super", "Method Overriding", "Llamada a superclase", "Herencia"]
    },
    {
        id: 10,
        title: "Java Instanceof keyword",
        problem: "Usar el operador instanceof para verificar el tipo de objeto.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.util.ArrayList;
import java.util.Scanner;

class Student {}
class Rockstar {}
class Hacker {}

public class InstanceOFTutorial {
    static String count(ArrayList mylist) {
        int a = 0, b = 0, c = 0;
        for (int i = 0; i < mylist.size(); i++) {
            Object element = mylist.get(i);
            if (element instanceof Student)
                a++;
            if (element instanceof Rockstar)
                b++;
            if (element instanceof Hacker)
                c++;
        }
        String ret = Integer.toString(a) + " " + Integer.toString(b) + " " + Integer.toString(c);
        return ret;
    }

    public static void main(String[] args) {
        ArrayList mylist = new ArrayList();
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        for (int i = 0; i < t; i++) {
            String s = sc.next();
            if (s.equals("Student")) mylist.add(new Student());
            if (s.equals("Rockstar")) mylist.add(new Rockstar());
            if (s.equals("Hacker")) mylist.add(new Hacker());
        }
        System.out.println(count(mylist));
    }
}
`,
        console: [
            { type: "input", text: "> 5" },
            { type: "input", text: "> Student" },
            { type: "input", text: "> Student" },
            { type: "input", text: "> Rockstar" },
            { type: "input", text: "> Student" },
            { type: "input", text: "> Hacker" },
            { type: "output", text: "3 1 1" }
        ],
        concepts: ["instanceof", "Type checking", "ArrayList", "Polimorfismo"]
    },
    {
        id: 11,
        title: "Java Iterator",
        problem: "Usar Iterator para recorrer colecciones y filtrar elementos.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class Main {
    static Iterator func(ArrayList mylist) {
        Iterator it = mylist.iterator();
        while (it.hasNext()) {
            Object element = it.next();
            if (element.equals("###"))
                break;
        }
        return it;
    }

    @SuppressWarnings({ "unchecked" })
    public static void main(String[] args) {
        ArrayList mylist = new ArrayList();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        for (int i = 0; i < n; i++) {
            mylist.add(sc.nextInt());
        }
        mylist.add("###");
        for (int i = 0; i < m; i++) {
            mylist.add(sc.next());
        }
        Iterator it = func(mylist);
        while (it.hasNext()) {
            Object element = it.next();
            System.out.println((String) element);
        }
    }
}`,
        console: [
            { type: "input", text: "> 2 2" },
            { type: "input", text: "> 42" },
            { type: "input", text: "> 10" },
            { type: "input", text: "> hello" },
            { type: "input", text: "> java" },
            { type: "output", text: "hello" },
            { type: "output", text: "java" }
        ],
        concepts: ["Iterator", "ArrayList", "hasNext", "next"]
    },
    {
        id: 12,
        title: "Java Exception Handling (Try-catch)",
        problem: "Manejar excepciones usando bloques try-catch.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.util.InputMismatchException;
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            int x = sc.nextInt();
            int y = sc.nextInt();
            System.out.println(x / y);
        } catch (InputMismatchException e) {
            System.out.println("java.util.InputMismatchException");
        } catch (ArithmeticException e) {
            System.out.println(e);
        }
        sc.close();
    }
}
`,
        console: [
            { type: "input", text: "> 10" },
            { type: "input", text: "> 3" },
            { type: "output", text: "3" }
        ],
        concepts: ["try-catch", "InputMismatchException", "ArithmeticException", "Manejo de excepciones"]
    },
    {
        id: 13,
        title: "Java Exception Handling",
        problem: "Crear y lanzar excepciones personalizadas con validación.",
        code: `/**
 * @author Jefferson Sarango
 */
import java.util.Scanner;

class MyCalculator {
    public long power(int n, int p) throws Exception {
        if (n < 0 || p < 0) {
            throw new Exception("n or p should not be negative.");
        }
        if (n == 0 && p == 0) {
            throw new Exception("n and p should not be zero.");
        }
        return (long) Math.pow(n, p);
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        MyCalculator my_calculator = new MyCalculator();
        while (in.hasNextInt()) {
            int n = in.nextInt();
            int p = in.nextInt();
            try {
                System.out.println(my_calculator.power(n, p));
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}`,
        console: [
            { type: "input", text: "> 3 5" },
            { type: "input", text: "> 2 4" },
            { type: "input", text: "> 0 0" },
            { type: "input", text: "> -1 -2" },
            { type: "input", text: "> -1 3" },
            { type: "output", text: "243" },
            { type: "output", text: "16" },
            { type: "output", text: "java.lang.Exception: n or p should not be zero." },
            { type: "output", text: "java.lang.Exception: n or p should not be negative." }
        ],
        concepts: ["throws", "Exception", "Validación", "Excepciones personalizadas"]
    }
];

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function createActivityCard(activity) {
    const card = document.createElement('div');
    card.className = 'activity';
    
    const consoleOutput = activity.console.map(line => 
        `<div class="console-line ${line.type}">${line.text}</div>`
    ).join('');
    
    const concepts = activity.concepts.map(concept => 
        `<span class="concept-tag">${concept}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="activity-header">
            <div class="activity-number">Actividad ${activity.id}</div>
            <h2 class="activity-title">${activity.title}</h2>
            <p class="activity-problem">${activity.problem}</p>
        </div>
        <div class="code-block">
            <pre><code class="language-java">${escapeHtml(activity.code)}</code></pre>
        </div>
        <div class="console-block">
            ${consoleOutput}
        </div>
        <div class="concepts">
            ${concepts}
        </div>
    `;
    
    return card;
}

function initializeActivities() {
    const container = document.getElementById('activities-container');
    if (container) {
        activities.forEach(activity => {
            const card = createActivityCard(activity);
            container.appendChild(card);
            
            setTimeout(() => {
                Prism.highlightAllUnder(card);
            }, 50);
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeActivities);
